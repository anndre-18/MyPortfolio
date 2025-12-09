import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/data';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-wrapper">
              <img src={personalInfo.photo} alt={personalInfo.name} />
              <div className="image-border"></div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-intro">
              I'm a passionate <strong>UI/UX Designer</strong> and <strong>Full-Stack Developer</strong> 
              who loves creating beautiful, intuitive digital experiences. With a keen eye for design 
              and a strong foundation in development, I bridge the gap between aesthetics and functionality.
            </p>

            <div className="about-skills-summary">
              <div className="skill-category">
                <h3>🎨 UX + Design</h3>
                <p>
                  I specialize in user-centered design, creating wireframes, prototypes, and conducting 
                  UX research to ensure every interface is both beautiful and functional.
                </p>
              </div>

              <div className="skill-category">
                <h3>💻 Development</h3>
                <p>
                  I build scalable web applications using modern technologies like React, Node.js, and 
                  MongoDB, ensuring clean code and optimal performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

