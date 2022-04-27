import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InputSearch from './components/InputSearch';
import CartShopping from './components/CartShopping';
import Category from './components/Category';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InputSearch } />
          <Route exact path="/mycart" component={ CartShopping } />
        </Switch>
      </BrowserRouter>
      <Category />
    </main>
  );
}

export default App;
