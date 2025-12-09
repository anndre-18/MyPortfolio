import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/data';
import { FaGithub, FaLinkedin, FaBehance, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: FaGithub, url: personalInfo.social.github },
    { name: 'LinkedIn', icon: FaLinkedin, url: personalInfo.social.linkedin },
    { name: 'Instagram', icon: FaInstagram, url: personalInfo.social.instagram },
    { name: 'Behance', icon: FaBehance, url: personalInfo.social.behance }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.role}</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>
            © {currentYear} {personalInfo.name}. Designed & Built with ❤️
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

