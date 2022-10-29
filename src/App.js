import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Form from './Components/Form.js';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/Form">
            <Form />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
