import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer'
import LoginForm from './components/LoginForm'
import Router from './Router';

class App extends Component {
  componentWillMount(){
    var config = {
      apiKey: 'AIzaSyCMnYtqf2F7KQRLoA1TpSvhHbYRmNe6isw',
      authDomain: 'manager-1a100.firebaseapp.com',
      databaseURL: 'https://manager-1a100.firebaseio.com',
      projectId: 'manager-1a100',
      storageBucket: 'manager-1a100.appspot.com',
      messagingSenderId: '602280567305'
    };
    firebase.initializeApp(config);
  };
  render() {

    const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router/>
          </Provider>
      
       
    );
  }
}

export default App;

