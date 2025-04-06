import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Stars from './components/Stars';
import Home from './pages/Home';
import News from './pages/News';
import Resources from './pages/Resources';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Stars />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
