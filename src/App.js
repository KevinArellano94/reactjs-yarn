import logo from './logo.svg';
import './App.css';
//import { Frame } from "framer";
import {  motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, rotate: 360 }} transition={{ duration: 20 }} >
          <img src={logo} className="App-logo" alt="logo" />
        </motion.div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, x: 100, y: 100 }} transition={{ duration: 2 }} >
          <p>Kevin Arellano</p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, x: 100, y: 100, rotate: 360 }} transition={{ duration: 2 }} >
          <img src={logo} className="App-logo" alt="logo" />
        </motion.div>
      </header>
    </div>
  );
}

export default App;
