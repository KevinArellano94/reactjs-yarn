import React from "react";
import {  motion } from 'framer-motion';

function Home() {
    return (
      <div style={{ color: "white" }}>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            >
            <p>
              Explore the world...
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 15 }}
            >
            <p>...of programming with</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 21 }}
            >
            <h3>Kevin</h3>
          </motion.div>
          
      </div>
    );
  }
  
  export default Home;