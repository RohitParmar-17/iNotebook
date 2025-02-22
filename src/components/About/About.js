import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./About.css";
import { div } from "framer-motion/client";

const About = () => {
  return (
    <div className="about-container">
      {/* Background Glow Effect */}
      <div className="glow-effect">
        <motion.div 
          className="glow purple"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div 
          className="glow orange"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
      </div>

      {/* About Content */}
      <motion.div 
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="title">Rohit Parmar</h1>
        <p className="description">
          I'm a MERN Stack Developer with experience in Machine Learning, OCR, and Full-Stack Web Apps.  
          Passionate about building modern, scalable applications with a sleek UI/UX.
        </p>

        {/* Social Links */}
        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <a href="https://github.com" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="mailto:rohitghost5050@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
