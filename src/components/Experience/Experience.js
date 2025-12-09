import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/data';
import { FaLinkedin } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <motion.div
        className="experience-container"
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
          Experience
        </motion.h2>

        <div className="experience-card">
          <motion.div
            className="experience-header"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="experience-role">
              <h3>{experienceData.role}</h3>
              <p className="experience-org">{experienceData.organization}</p>
            </div>
            <div className="experience-period">
              <span>{experienceData.period}</span>
            </div>
          </motion.div>

          <motion.div
            className="experience-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="experience-section">
              <h4 className="section-heading">Responsibilities</h4>
              <ul className="experience-list">
                {experienceData.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
                  >
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </div>

            {experienceData.linkedinPost && (
              <motion.a
                href={experienceData.linkedinPost}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
                <span>View LinkedIn Post</span>
              </motion.a>
            )}

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

