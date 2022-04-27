import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InputSearch from './components/InputSearch';
import CartShopping from './components/CartShopping';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ InputSearch } />
        <Route exact path="/mycart" component={ CartShopping } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
