import React from "react";
import {  motion } from 'framer-motion';

import Projects from "./Projects"

function Home() {
    return (
      <div style={{ color: "white" }}>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
            <p>
              Explore the world...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            >
            <p>...of programming with</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            >
            <h3>Kevin</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            >
            <h3>PROJECTS</h3>
            <Projects />
          </motion.div>
          
      </div>
    );
  }
  
  export default Home;