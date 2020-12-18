import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './Home';
import Quote from './Quote';

const Routes = () => {
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={<Home />} />
      <Route path="/" component={<Quote />} />
      <Route path="/" component={<Calculator />} />
    </Switch>
  </BrowserRouter>;
};
