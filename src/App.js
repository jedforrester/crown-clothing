import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import {Switch, Route} from 'react-router-dom';

const OopsPage = () => (
  <div>Oops page doesn't exist</div>
)


function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route component={OopsPage} />>
    </Switch>
    </div>
  );
}

export default App;
