import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route path='/home' component={Home} />
    </div>
    </Router>
  );
}

export default App;
