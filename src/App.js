import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartShopping from './components/CartShopping';
import ItemCard from './components/ItemCard';
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
            render={ (props) => <ItemCard { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
