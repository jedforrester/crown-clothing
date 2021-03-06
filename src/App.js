import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';


const OopsPage = () => (
  <div>Oops page doesn't exist</div>
)


function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route component={OopsPage} />>
    </Switch>
    </div>
  );
}

export default App;
