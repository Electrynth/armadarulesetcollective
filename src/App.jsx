import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Stars from './components/Stars';
import Home from './pages/Home';
import News from './pages/News';
import Resources from './pages/Resources';
import About from './pages/About';
import OrganizedPlay from './pages/OrganizedPlay';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Stars />
        <div className="relative z-10">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/organized-play" element={<OrganizedPlay />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
