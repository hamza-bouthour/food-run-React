
import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Loading from './components/LoadingComponent'
import { PersistGate } from 'redux-persist/es/integration/react';

const { persistor, store } = ConfigureStore();
export default function App() {
  return (
    
        <Provider store={store}>

                <BrowserRouter>
                  <Main />
                </BrowserRouter>
      
        </Provider>
    
  );
}
// <PersistGate
// loading={<Loading />}
// persistor={persistor}>
// </PersistGate>