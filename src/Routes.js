import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Quote" component={Quote} />
      <Route path="/Calculator" component={Calculator} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
