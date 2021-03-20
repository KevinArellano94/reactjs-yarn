import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//import logo from './logo.svg';
import './App.css';
import Home from "../src/pages/Home";
import About from "./pages/About";

//import { Frame } from "framer";
import {  motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">

          {/* <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1, rotate: 3600 }} transition={{ duration: 300 }} >
            <img src={logo} className="App-logo" alt="logo" />
          </motion.div> */}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >
            
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >
            <Link to="/">Home</Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} >
            <Link to="/about">About</Link>
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 4 }} >
            <p>
              Explore the world...
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 15 }} >
            <p>...of programming</p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 21 }} >
            <p>with Kevin</p>
          </motion.div>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <Switch>

            <Route exact path="/">
                <Home />
            </Route>
            
            <Route path="/about">
              <About />
            </Route>
             
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;