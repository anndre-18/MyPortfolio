import React from 'react';
import { motion } from 'framer-motion';
import { caseStudiesData } from '../../data/data';
import './CaseStudies.css';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="case-studies">
      <motion.div
        className="case-studies-container"
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
          UI/UX Case Studies
        </motion.h2>

        <p className="section-subtitle">
          Exploring design challenges and solutions through user-centered approaches
        </p>

        <div className="case-studies-grid">
          {caseStudiesData.map((study, index) => (
            <motion.div
              key={study.id}
              className="case-study-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="case-study-image">
                <img src={study.thumbnail} alt={study.title} />
                <div className="image-overlay"></div>
              </div>

              <div className="case-study-content">
                <h3 className="case-study-title">{study.title}</h3>

                <p className="case-study-description">{study.description}</p>

                <div className="case-study-tools">
                  <h4 className="section-label">Tools Used</h4>
                  <div className="tools-list">
                    {study.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {study.prototype ? 'View Prototype →' : 'View Case Study →'}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudies;

