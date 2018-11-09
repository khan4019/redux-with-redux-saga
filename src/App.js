import React, { Component } from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Feed from './components/Feed';
import rootSaga from './sagas/asyncSagas'
import FeedContainer from './containers/FeedContainer';
import HeaderContainer from './containers/HeaderContainer';
import rootReducers from './reducers/index';
import CartContainer from './containers/cartContainer';
import Single from './components/Single';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeContext, themes } from './theme-context';

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(
  rootReducers, 
  composeWithDevTools(
  applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(rootSaga);



class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store ={store}>
        <ThemeContext.Provider value={themes.dark}>
          <Router>
            <div>
              
                <HeaderContainer></HeaderContainer>
                <Route exact path="/" component={FeedContainer}/>
                <Route path="/feed" component={Feed}/>
                <Route path="/cart" component={CartContainer}/>
                <Route path="/photo/:id" component={Single}/>

              
            </div>
          </Router>
          </ThemeContext.Provider>
        </Provider>
      </div>
    );
  }
}

export default App;
