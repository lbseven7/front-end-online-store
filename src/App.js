import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import InputSearch from './components/InputSearch';
import CartShopping from './components/CartShopping';
import Home from './pages/Home';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/mycart" component={ CartShopping } />
          {/* <Route exact path="/cart-shopping" component={ CartShopping } /> */}
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
