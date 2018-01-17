import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducer'
import LoginForm from './components/LoginForm'

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm/>
          </View>
          </Provider>
      
       
    );
  }
}

export default App;

