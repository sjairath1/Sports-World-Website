import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingCard from '../components/FloatingCard';
import './Home.css';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const features = [
    {
      icon: 'fa-trophy',
      title: 'Soccer Legends',
      description: 'Explore the greatest moments in soccer history with interactive timelines and legendary players.',
      color: '#f4d03f',
      gradient: 'linear-gradient(135deg, #f4d03f 0%, #e67e22 100%)'
    },
    {
      icon: 'fa-medal',
      title: 'Basketball Icons',
      description: 'Discover the most iconic basketball moments and legendary players that shaped the game.',
      color: '#e8e0d0',
      gradient: 'linear-gradient(135deg, #e8e0d0 0%, #d4c4a8 100%)'
    },
    {
      icon: 'fa-star',
      title: 'Historic Events',
      description: 'Relive the most memorable sports events that changed the course of history.',
      color: '#f39c12',
      gradient: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)'
    }
  ];

  const stats = [
    { number: '100+', label: 'Iconic Moments', icon: 'fa-fire' },
    { number: '50+', label: 'Legendary Players', icon: 'fa-crown' },
    { number: '20+', label: 'Historic Events', icon: 'fa-calendar-alt' },
    { number: '24/7', label: 'Available', icon: 'fa-clock' }
  ];

  return (
    <div className="home page-transition">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          {/* Video background - using your stepovers video */}
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="/images/sports-poster.jpg"
          >
            <source src="/videos/stepovers.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Fallback background - black screen */}
          <div className="hero-fallback-bg"></div>
          
          <div className="hero-overlay"></div>
          <div className="hero-particles">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="hero-particle"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-title display-1"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              THE GREATEST
              <span className="hero-highlight"> SPORTS MOMENTS</span>
            </motion.h1>
            <motion.p 
              className="hero-subtitle body-large"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the most iconic moments in soccer and basketball history through an interactive journey
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/soccer">
                <motion.button
                  className="btn hero-btn"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-futbol"></i>
                  EXPLORE SOCCER
                </motion.button>
              </Link>
              <Link to="/basketball">
                <motion.button
                  className="btn btn-secondary hero-btn"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-basketball-ball"></i>
                  EXPLORE BASKETBALL
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features section" ref={featuresRef}>
        <div className="container">
          <motion.h2
            className="section-title heading-1"
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            WHAT YOU'LL DISCOVER
          </motion.h2>
          <div className="grid grid-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <FloatingCard className="feature-card">
                  <motion.div 
                    className="feature-icon"
                    style={{ background: feature.gradient }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <i className={`fas ${feature.icon}`}></i>
                  </motion.div>
                  <h3 className="heading-2">{feature.title}</h3>
                  <p className="body-medium">{feature.description}</p>
                </FloatingCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats section" ref={statsRef}>
        <div className="container">
          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <FloatingCard className="stat-item">
                  <motion.div 
                    className="stat-icon"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  >
                    <i className={`fas ${stat.icon}`}></i>
                  </motion.div>
                  <div className="stat-number display-2">{stat.number}</div>
                  <div className="stat-label heading-2">{stat.label}</div>
                </FloatingCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingCard className="cta-card">
              <h2 className="display-3">READY TO RELIVE HISTORY?</h2>
              <p className="body-large">Start your journey through the greatest sports moments ever captured</p>
              <div className="cta-buttons">
                <Link to="/soccer">
                  <motion.button
                    className="btn"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    START WITH SOCCER
                  </motion.button>
                </Link>
                <Link to="/basketball">
                  <motion.button
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    START WITH BASKETBALL
                  </motion.button>
                </Link>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
