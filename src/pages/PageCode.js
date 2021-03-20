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

const pink = { color: "rgb(205, 151, 201)" };
const blue = { color: "rgb(170, 225, 254)" };
const orange = { color: "rgb(213, 160, 139)" };

function App() {
  return (
    <div style={{ background: "black" }}>
      <div>
        <motion.p initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 5 }}>
          <p style={{ color: "white" }}>
            <code>
              <span style={ pink }>import </span>
              <span style={ blue }>React </span>
              <span style={ pink }>from </span>
              <span style={ orange }>"react"</span>;
              <br />

              <span style={ pink }>import </span>&#123;
              <br />
              <span style={ blue }>&#8195;&#8195;&#8195;BrowserRouter </span>
              <span style={ pink }>as </span>
              <span style={ blue }>Router</span>,
              <br />
              <span style={ blue }>&#8195;&#8195;&#8195;Switch</span>,
              <br />
              <span style={ blue }>&#8195;&#8195;&#8195;Route</span>,
              <br />
              <span style={ blue }>&#8195;&#8195;&#8195;Link</span>
              <br />
              <span>&#125; </span>
              <span style={ pink }>from </span>
              <span style={ orange }>"react-router-dom"</span>;
            </code>
          </p>
        </motion.p>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <p style={{ color: "white" }}>Hello</p>
        </motion.h2>
      </div>
    </div>
  );
}

export default App;