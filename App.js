import React from 'react';
import { StyleSheet} from 'react-native';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './src/reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import Router from './src/Router'

class App extends React.Component{
  componentWillMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyA1slsDPk5ZLmkILX7pM1HIrZTeRf-Sd3U",
      authDomain: "tp-multipantalla.firebaseapp.com",
      databaseURL: "https://tp-multipantalla.firebaseio.com",
      projectId: "tp-multipantalla",
      storageBucket: "",
      messagingSenderId: "478917212645",
      appId: "1:478917212645:web:74fd2cc1cf98c2df"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render(){
    const store = createStore(reducers, {},applyMiddleware(ReduxThunk))
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App