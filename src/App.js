import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/register' component={Registration} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
