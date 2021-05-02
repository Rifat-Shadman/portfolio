import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Tourmate from './components/SingleProjects/TourMate/Tourmate';
import ContentWR from './components/SingleProjects/ContentWR/ContentWR';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
        <hr /> */}
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <div > */}
          <Header></Header>
          <Switch>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/projects">
              <Projects></Projects>
            </Route>

            <Route path="/tourmate">
              <Tourmate></Tourmate>
            </Route>

            <Route path="/contentWR">
              <ContentWR></ContentWR>
            </Route>

            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        {/* </div> */}

      {/* </div> */}
    </Router>
  );
}

export default App;
