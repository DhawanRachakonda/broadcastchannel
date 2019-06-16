import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from '../components/App.jsx';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/app" component={App} />
        <Redirect exact from="/" to="/App" />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
