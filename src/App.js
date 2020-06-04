import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/homepage/Homepage';
import Play from './pages/play/Play';
import Leaderboard from './pages/leaderboard/Leaderboard';
import About from './pages/about/About';

const App = () => (
  <Router>
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/play'>
          <Play />
        </Route>
        <Route path='/leaderboard'>
          <Leaderboard />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
