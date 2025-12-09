import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/data';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    { title: 'UI/UX', data: skillsData.uiux, gradient: 'gradient-1' },
    { title: 'Frontend', data: skillsData.frontend, gradient: 'gradient-2' },
    { title: 'Backend', data: skillsData.backend, gradient: 'gradient-3' },
    { title: 'Tools', data: skillsData.tools, gradient: 'gradient-4' }
  ];

  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
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
          Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className={`skill-category-card ${category.gradient}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-items">
                {category.data.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

