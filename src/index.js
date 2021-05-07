import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/css/font-awesome.min.css';
import './assets/css/themify-icons.css'
import './index.css';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import reportWebVitals from './reportWebVitals';
import './assets/css/style.scss';

ReactDOM.render(
  <React.StrictMode>
      
      <Header />

      <Router>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
            <Route exact path="/">
            <Home />
          </Route>
        </Switch>
   
      </Router>


</React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
