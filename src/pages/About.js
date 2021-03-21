import React from "react";
import {  motion } from 'framer-motion';

function About() {
    return (
      <div style={{ color: "white" }}>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
            <p>
              Specialized in rapid deep learning and connection maker.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            >
            <p>
              Specialized in rapid deep learning and connection maker.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            >
            <p>
              Specialized in rapid deep learning and connection maker.
            </p>
          </motion.div>

      </div>
    );
  }
  
  export default About;