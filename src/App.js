import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Soccer from './pages/Soccer';
import Basketball from './pages/Basketball';
import ParticleBackground from './components/ParticleBackground';
import GradientBackground from './components/GradientBackground';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <GradientBackground />
        <ParticleBackground />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            } />
            <Route path="/soccer" element={
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Soccer />
              </motion.div>
            } />
            <Route path="/basketball" element={
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Basketball />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
