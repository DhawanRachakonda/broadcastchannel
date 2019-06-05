import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import FlightServices from '../components/App.jsx';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/flight-services" component={FlightServices} />
        <Redirect exact from="/" to="/flight-services" />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
