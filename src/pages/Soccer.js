import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingCard from '../components/FloatingCard';
import './Soccer.css';

const Soccer = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(0);
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [playersRef, playersInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [eventsRef, eventsInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const players = [
    {
      name: 'Lionel Messi',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg',
      position: 'Forward',
      club: 'Inter Miami',
      achievements: ['7x Ballon d\'Or', '4x Champions League', 'World Cup Winner'],
      description: 'Considered one of the greatest players of all time, Messi\'s dribbling, vision, and goal-scoring ability have revolutionized the sport.',
      wikipedia: 'https://en.wikipedia.org/wiki/Lionel_Messi'
    },
    {
      name: 'Cristiano Ronaldo',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg',
      position: 'Forward',
      club: 'Al Nassr',
      achievements: ['5x Ballon d\'Or', '5x Champions League', '5x Premier League'],
      description: 'Known for his incredible athleticism, goal-scoring prowess, and dedication to fitness, Ronaldo has dominated multiple leagues.',
      wikipedia: 'https://en.wikipedia.org/wiki/Cristiano_Ronaldo'
    },
    {
      name: 'Pelé',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Pele_by_John_Mathew_Smith_%26_crop.jpg',
      position: 'Forward',
      club: 'Retired',
      achievements: ['3x World Cup Winner', 'FIFA Player of the Century', '1,000+ Goals'],
      description: 'The Brazilian legend who won three World Cups and scored over 1,000 career goals, setting the standard for greatness.',
      wikipedia: 'https://en.wikipedia.org/wiki/Pel%C3%A9'
    },
    {
      name: 'Diego Maradona',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Diego_Maradona_1986.jpg',
      position: 'Midfielder',
      club: 'Retired',
      achievements: ['World Cup Winner 1986', 'Hand of God Goal', 'Napoli Legend'],
      description: 'The Argentine maestro whose skill and creativity led Argentina to World Cup glory in 1986.',
      wikipedia: 'https://en.wikipedia.org/wiki/Diego_Maradona'
    },
    {
      name: 'Johan Cruyff',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Johan_Cruyff_1974.jpg',
      position: 'Forward',
      club: 'Retired',
      achievements: ['3x Ballon d\'Or', 'Total Football Pioneer', 'Barcelona Legend'],
      description: 'The Dutch master who revolutionized football with his Total Football philosophy and technical brilliance.',
      wikipedia: 'https://en.wikipedia.org/wiki/Johan_Cruyff'
    }
  ];

  const events = [
    {
      date: 'May 13, 2012',
      title: 'Aguero Goal vs. QPR',
      description: 'In dire need of a goal to win the Premier League, striker Sergio Aguero clutches up to score the goal at the end of the game.',
      videoId: '-4v6iSwXX5g',
      category: 'Premier League'
    },
    {
      date: 'May 12, 2013',
      title: 'Troy Deeney Goal vs. Leicester City',
      description: 'Watford\'s hopes of earning a promotion to the Premier League lied in the hands of Troy Deeney, who scores a decisive goal to guarantee the win.',
      videoId: '6TnKvlQ2h7s',
      category: 'Championship'
    },
    {
      date: 'July 8, 2014',
      title: 'Brazil losing to Germany 7-1',
      description: 'Losing their star player to a season ending injury, Brazil hoped that the team could will themselves to beat European powerhouse Germany.',
      videoId: 'TbDzouUuD8E',
      category: 'World Cup'
    },
    {
      date: 'June 6, 2015',
      title: 'FC Barcelona win the Treble',
      description: 'Barcelona beat Juventus to win all the trophies possible in a season.',
      videoId: '1mVu7AzvCDo',
      category: 'Champions League'
    },
    {
      date: 'May 2, 2016',
      title: 'Leicester City win the Premier League',
      description: 'Having a less than 2% chance of winning the league, Leicester City do the unthinkable.',
      videoId: 'LVVlOmuWE5A',
      category: 'Premier League'
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
    <div className="soccer page-transition">
      {/* Hero Section */}
      <section className="soccer-hero" ref={heroRef}>
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
              <i className="fas fa-futbol"></i>
              Soccer Legends
            </h1>
            <p className="hero-subtitle">
              Discover the greatest players and moments that shaped the beautiful game
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
            Greatest Soccer Athletes
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
                            <p className="player-club">{players[currentPlayer].club}</p>
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

export default Soccer;
