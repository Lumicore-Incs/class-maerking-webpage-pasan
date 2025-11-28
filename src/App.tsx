import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import Navbar from './components/Navbar';
import ResultPage from './pages/ResultPage'; // Import ResultPage
import BlogPage from './pages/BlogPage';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/blog" element={<BlogPage />} />
        {/* <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}
