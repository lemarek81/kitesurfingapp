import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
// import './index.css'
import Home from './Components/pages/Home';
function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
