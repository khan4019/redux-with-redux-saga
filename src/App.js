import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import Cart from './components/Cart';
import productReducers from './reducers/productReducers';
import FeedContainer from './containers/FeedContainer';
import HeaderContainer from './containers/HeaderContainer';


const store = createStore(productReducers);;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store ={store}>
          <Router>
            <div>
              <HeaderContainer></HeaderContainer>
              <Route exact path="/" component={FeedContainer}/>
              <Route path="/feed" component={Feed}/>
              <Route path="/cart" component={Cart}/>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
