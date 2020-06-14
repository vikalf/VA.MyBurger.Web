import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Layout>
              <BurgerBuilder></BurgerBuilder>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
