import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { AuthProvider } from './context/AuthProvider.js';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; //import Provider to keep track of that store 
import { reducers } from './reducers';

//initialize redux
//store is that global state and allows to access that store from anywhere inside of the app

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //  1. Wrap our application with a provider component where we specify the store
    <BrowserRouter>
        <Provider store={store}>
            <AuthProvider store={store}>
                <App />
            </AuthProvider>
        </Provider>
    </BrowserRouter>
);
