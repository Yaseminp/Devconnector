import React from 'react';
import './App.css';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './component/auth/Register';
import Login from './component/auth/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Landing} />
      {Landing} />
      <div className="container">
        <Route exact path = "/register" component ={Register} />
        <Route exact path ="/Login" component = {Login} />
      </div>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;