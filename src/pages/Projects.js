import React from "react";
import {  motion } from 'framer-motion';

function Projects() {
    return (
      <div style={{ color: "white" }}>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
            <h4>ReactJS</h4>
            <h4>GitHub</h4>
            <h4>Netfliy</h4>
            <p>ReactJS single page static application.  This is used as my portfoio showcasing all projects created.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            >
            <h4>Python Sctipt</h4>
            <p>Script that automates opening pages in incognito/private both in Google Chrome and Firefox.  Another script to explore Instagrams API while the last is displaying UI/UX designs.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            >
            <p>Video design</p>
          </motion.div>

      </div>
    );
  }
  
  export default Projects;