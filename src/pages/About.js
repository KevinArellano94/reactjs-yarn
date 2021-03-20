import React from "react";
import {  motion } from 'framer-motion';

function About() {
    return (
      <div style={{ color: "white" }}>
          
          <p></p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            >
            <p>
              Specialized in rapid deep learning and connection maker.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 15 }}
            >
            <p>
              Specialized in rapid deep learning and connection maker.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 21 }}
            >
            <p>
              Specialized in rapid deep learning and connection maker.
            </p>
          </motion.div>

      </div>
    );
  }
  
  export default About;