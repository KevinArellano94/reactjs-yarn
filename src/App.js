import logo from './logo.svg';
import './App.css';
//import { Frame } from "framer";
import {  motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1, rotate: 3600 }} transition={{ duration: 300 }} >
          <img src={logo} className="App-logo" alt="logo" />
        </motion.div>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }} >
          <p>
            Explore the world...
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 6 }} >
          <p>Kevin Arellano</p>
        </motion.div>
      </header>
    </div>
  );
}

export default App;