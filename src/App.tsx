import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './pages/homepage';
import Navbar from './components/Navbar';
import ResultPage from './pages/ResultPage'; // Import ResultPage
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/login';
import Dashboard from './pages/Dashboard';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      <ScrollToTop />
      {!isDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
