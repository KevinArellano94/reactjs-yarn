import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
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

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} >
            <Link to="/">Home</Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} >
            <Link to="/about">About</Link>
          </motion.div>
          
          <Switch>

            <Route exact path="/">
                <Home />
            </Route>
            
            <Route path="/about">
              <About />
            </Route>
             
          </Switch>
        </header>
        <footer>
          <p>2021</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;