import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBulder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/CheckOut/CheckOut';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders'; 

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Switch>
            <Route path='/orders' component={Orders} />
            <Route path='/checkout' component={CheckOut} />
            <Route path='/' component={BurgerBulder} />
          </Switch>
        </Layout>
      </div>
    );
  }

}

export default App;