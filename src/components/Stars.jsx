import { useEffect, useState, useMemo } from 'react';
import '../styles/Stars.css';

const Stars = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    // Update dimensions on mount and resize
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Check if a position is too close to existing stars
  const isTooClose = (x, y, existingStars, minDistance) => {
    return existingStars.some(star => {
      const dx = x - star.x;
      const dy = y - star.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < minDistance;
    });
  };

  // Generate stars for different layers
  const generateStars = (count, size, seed) => {
    const stars = [];
    const minDistance = size * 2; // Minimum distance between stars (scaled by star size)
    const maxAttempts = 50; // Maximum attempts to place each star

    // Calculate star density based on viewport size
    const density = Math.min(dimensions.width, dimensions.height) / 1000;
    const adjustedCount = Math.floor(count * density);

    // Use a seeded random number generator for consistent positions
    const seededRandom = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < adjustedCount; i++) {
      let attempts = 0;
      let x, y;
      
      do {
        // Use seeded random numbers based on the layer seed and star index
        x = seededRandom(seed + i * 0.1) * 100;
        y = seededRandom(seed + i * 0.2) * 100;
        attempts++;
      } while (isTooClose(x, y, stars, minDistance) && attempts < maxAttempts);

      if (attempts < maxAttempts) {
        stars.push({ x, y });
      }
    }

    return stars.map((star, i) => {
      const style = {
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${size}px`,
        height: `${size}px`,
      };
      return <div key={i} className="star" style={style} />;
    });
  };

  // Use useMemo to ensure stars are only generated once for each dimension change
  const farStars = useMemo(() => generateStars(125, 1.25, 1), [dimensions]);
  const mediumStars = useMemo(() => generateStars(100, 2.5, 2), [dimensions]);
  const nearStars = useMemo(() => generateStars(75, 3.75, 3), [dimensions]);

  return (
    <div className={`stars-container ${isVisible ? 'visible' : ''}`}>
      {/* Far stars (small, more numerous) */}
      <div className="stars-layer far">
        {farStars}
      </div>
      {/* Medium stars */}
      <div className="stars-layer medium">
        {mediumStars}
      </div>
      {/* Near stars (larger, fewer) */}
      <div className="stars-layer near">
        {nearStars}
      </div>
    </div>
  );
};

export default Stars; 