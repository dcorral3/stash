import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import firebaseConfig from './config/firebaseConfig';
import LoginForm from './src/components/LoginForm';

class App extends Component {
  componentWillMount() {
    try {
      firebase.initializeApp(firebaseConfig);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
