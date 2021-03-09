import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Product from './pages/Product';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Menu />
      </Route>
      <Route exact path='/:id'>
        <Product />
      </Route>
    </Switch>
  );
}

export default App;
