import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';

import Home from './pages/home';
import UserRegister from './pages/user-registration';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <React.Fragment>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/register" component={ UserRegister } exact />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
