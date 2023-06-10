import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import FoodForm from './components/FoodForm';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/form" component={FoodForm} />
    </Router>
  );
}

export default App;
