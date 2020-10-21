import React from 'react';
import { Redirect, Route,  Switch } from 'react-router-dom';


import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery';
import Events from './components/pages/Events';
function App() {
  return (
    <>

<Navbar/>

  <Switch>
    <Route path='/' exact  component={Home}/>
    <Route path="/about" exact component={Services} />
    <Route path="/gallery" exact component={Gallery} />
    <Route path="/events" exact component={Events} />
    <Redirect to="/"/>
  </Switch>


    </>
  );
}

export default App;
