import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingCard from '../components/FloatingCard';
import './Basketball.css';

const Basketball = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [playersRef, playersInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [eventsRef, eventsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const players = [
    {
      name: 'Michael Jordan',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Michael_Jordan_in_2014.jpg',
      position: 'Shooting Guard',
      team: 'Chicago Bulls',
      achievements: ['6x NBA Champion', '6x Finals MVP', '5x Regular Season MVP'],
      description: 'Widely considered the greatest basketball player of all time, Jordan\'s competitive drive and clutch performances defined an era.',
      wikipedia: 'https://en.wikipedia.org/wiki/Michael_Jordan'
    },
    {
      name: 'LeBron James',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/LeBron_James_crop.jpg',
      position: 'Small Forward',
      team: 'Los Angeles Lakers',
      achievements: ['4x NBA Champion', '4x Finals MVP', '4x Regular Season MVP'],
      description: 'A generational talent with incredible basketball IQ, LeBron has dominated the league for over two decades.',
      wikipedia: 'https://en.wikipedia.org/wiki/LeBron_James'
    },
    {
      name: 'Kobe Bryant',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Kobe_Bryant_2014.jpg',
      position: 'Shooting Guard',
      team: 'Los Angeles Lakers',
      achievements: ['5x NBA Champion', '2x Finals MVP', '1x Regular Season MVP'],
      description: 'The Black Mamba\'s work ethic and killer instinct made him one of the most feared competitors in NBA history.',
      wikipedia: 'https://en.wikipedia.org/wiki/Kobe_Bryant'
    },
    {
      name: 'Stephen Curry',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Stephen_Curry_Shooting_%28cropped%29.jpg',
      position: 'Point Guard',
      team: 'Golden State Warriors',
      achievements: ['4x NBA Champion', '2x Regular Season MVP', 'Greatest Shooter Ever'],
      description: 'Revolutionized the game with his unprecedented three-point shooting and changed how basketball is played.',
      wikipedia: 'https://en.wikipedia.org/wiki/Stephen_Curry'
    },
    {
      name: 'Magic Johnson',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Earvin_%22Magic%22_Johnson_1992.jpg',
      position: 'Point Guard',
      team: 'Los Angeles Lakers',
      achievements: ['5x NBA Champion', '3x Finals MVP', '3x Regular Season MVP'],
      description: 'The greatest point guard ever, Magic\'s size and vision created the Showtime Lakers dynasty.',
      wikipedia: 'https://en.wikipedia.org/wiki/Magic_Johnson'
    }
  ];

  const events = [
    {
      date: 'May 3, 2011',
      title: 'Derrick Rose wins MVP',
      description: 'Derrick Rose became the youngest player to win the MVP award in NBA history at just 22-years-old.',
      videoId: 'n1V0NEIrXNw',
      category: 'Regular Season'
    },
    {
      date: 'June 18, 2013',
      title: 'Ray Allen 3 against the Spurs',
      description: 'Ray Allen hits an enormous three pointer to tie the game and extend the series vs. the Spurs.',
      videoId: '5zYoE0OzoBU',
      category: 'NBA Finals'
    },
    {
      date: 'June 16, 2015',
      title: 'Start of the Warriors Dynasty',
      description: 'Stephen Curry and the Warriors win their first championship, marking the start of their illustrious dynasty.',
      videoId: '0-dxPX4njxI',
      category: 'NBA Finals'
    },
    {
      date: 'Feb 27, 2016',
      title: 'Steph Curry\'s iconic shot vs OKC',
      description: 'Stephen Curry hits a half court shot to win the game in overtime against the Oklahoma City Thunder.',
      videoId: 'TsDxhD7mVcE',
      category: 'Regular Season'
    },
    {
      date: 'June 19, 2016',
      title: 'LeBron block on Iguodala',
      description: 'The block sealed the Cavaliers\' comeback from being 3-1 down, and winning the 2016 NBA Championship.',
      videoId: 'Hgade7_mjHc',
      category: 'NBA Finals'
    }
  ];

  const nextPlayer = () => {
    setCurrentPlayer((prev) => (prev + 1) % players.length);
  };

  const prevPlayer = () => {
    setCurrentPlayer((prev) => (prev - 1 + players.length) % players.length);
  };

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + events.length) % players.length);
  };

  return (
    <div className="basketball page-transition">
      {/* Hero Section */}
      <section className="basketball-hero" ref={heroRef}>
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              <i className="fas fa-basketball-ball"></i>
              Basketball Icons
            </h1>
            <p className="hero-subtitle">
              Experience the greatest moments and legendary players that shaped basketball history
            </p>
          </motion.div>
        </div>
      </section>

      {/* Players Carousel Section */}
      <section className="players-section section" ref={playersRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={playersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Greatest Basketball Athletes
          </motion.h2>
          
          <div className="players-carousel">
            <motion.button
              className="carousel-btn prev-btn"
              onClick={prevPlayer}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-chevron-left"></i>
            </motion.button>

            <div className="carousel-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPlayer}
                  className="player-card"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <FloatingCard className="player-card-content">
                    <div className="player-image">
                      <a href={players[currentPlayer].wikipedia} target="_blank" rel="noopener noreferrer">
                        <img src={players[currentPlayer].image} alt={players[currentPlayer].name} />
                        <div className="player-overlay">
                          <div className="player-info">
                            <h3>{players[currentPlayer].name}</h3>
                            <p className="player-position">{players[currentPlayer].position}</p>
                            <p className="player-team">{players[currentPlayer].team}</p>
                            <div className="click-hint">
                              <i className="fas fa-external-link-alt"></i>
                              Click to view Wikipedia
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="player-details">
                      <h3>{players[currentPlayer].name}</h3>
                      <div className="achievements">
                        {players[currentPlayer].achievements.map((achievement, index) => (
                          <span key={index} className="achievement-tag">{achievement}</span>
                        ))}
                      </div>
                      <p className="player-description">{players[currentPlayer].description}</p>
                    </div>
                  </FloatingCard>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              className="carousel-btn next-btn"
              onClick={nextPlayer}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-chevron-right"></i>
            </motion.button>
          </div>

          <div className="carousel-indicators">
            {players.map((_, index) => (
              <motion.button
                key={index}
                className={`indicator ${index === currentPlayer ? 'active' : ''}`}
                onClick={() => setCurrentPlayer(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Events Timeline Section */}
      <section className="events-section section" ref={eventsRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={eventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Iconic Events
          </motion.h2>

          <div className="events-carousel">
            <motion.button
              className="carousel-btn prev-btn"
              onClick={prevEvent}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-chevron-left"></i>
            </motion.button>

            <div className="events-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEvent}
                  className="event-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <FloatingCard className="event-card-content">
                    <div className="event-header">
                      <span className="event-category">{events[currentEvent].category}</span>
                      <span className="event-date">{events[currentEvent].date}</span>
                    </div>
                    <h3 className="event-title">{events[currentEvent].title}</h3>
                    <p className="event-description">{events[currentEvent].description}</p>
                    <div className="event-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${events[currentEvent].videoId}`}
                        title={events[currentEvent].title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </FloatingCard>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              className="carousel-btn next-btn"
              onClick={nextEvent}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-chevron-right"></i>
            </motion.button>
          </div>

          <div className="carousel-indicators">
            {events.map((_, index) => (
              <motion.button
                key={index}
                className={`indicator ${index === currentEvent ? 'active' : ''}`}
                onClick={() => setCurrentEvent(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Basketball;
