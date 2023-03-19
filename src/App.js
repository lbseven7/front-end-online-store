import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartShopping from './components/CartShopping';
import ItemCardDetails from './pages/ItemCardDetails';
import Home from './pages/Home';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/mycart" component={ CartShopping } />
          <Route
            exact
            path="/item/:id"
            component={ ItemCardDetails }
          />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
