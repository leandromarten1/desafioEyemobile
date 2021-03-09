import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Menu />
      </Route>
    </Switch>
  );
}

export default App;
