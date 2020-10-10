import React from 'react';
import './App.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link
} from "react-router-dom";



function App() {

  return (
    <Router>
      <Switch>
        <Route path="/register" exact path="/">
            <div className="App">
              <div className="Body">
              <RegisterForm />
              </div>
            </div>
        </Route>
        <Route path="/login">
            <div className="App">
              <div className="Body">
              <LoginForm />
              </div>
            </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
