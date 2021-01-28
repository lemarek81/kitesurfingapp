import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Spots from './Components/pages/Spots';
import Instructors from './Components/pages/Instructors';
import Kiteschools from './Components/pages/Kiteschools';
import Courses from './Components/pages/Courses';
import Contact from './Components/pages/Contact';
import Footer from'./Components/Footer';


function App() {
  return (
    <div className='pageContainer'>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/Spots' exact component={Spots}></Route>
          <Route path='/Instructors' exact component={Instructors}></Route>
          <Route path='/Kiteschools' exact component={Kiteschools}></Route>
          <Route path='/Courses' exact component={Courses}></Route>
          <Route path='/Contact' exact component={Contact}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
