import React from 'react'
import Login from './components/Login'
import { Switch, Route } from 'react-router-dom'
import OtpScreen from './components/OtpScreen';
import RestaurantList from './components/RestaurantList'
import RestaurantDetails from './components/RestaurantDetails'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/otp" component={OtpScreen} />
        <Route exact path="/restaurant-list" component={RestaurantList} />
        <Route exact path="/restaurant-details" component={RestaurantDetails} />

      </Switch>
    </div>
  );
}

export default App;
