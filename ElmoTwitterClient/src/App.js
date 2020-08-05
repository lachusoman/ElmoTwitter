import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserShow from './pages/UserShow';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment />
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route path="/home" component={HomePage} />
          <Route path="/user" component={UserShow} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;