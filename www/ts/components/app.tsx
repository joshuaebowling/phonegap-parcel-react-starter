import React from 'react';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import dbService from "../services/db";

const App = () => {
  console.log(dbService());
  return (
    <div>
      <Router>
        <div>
        <Route path="/" exact pageName="" pageDescription="" render={() => <h1>Welcome</h1>} />
        </div>
      </Router>
    </div>
  );
};
export default App;
