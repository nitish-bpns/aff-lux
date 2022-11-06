import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Form from './component/form';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          {/* <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul> */}
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/form' element={< Form />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;