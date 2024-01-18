import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { reducers } from './reducers/index';
import { WelcomeProvider } from "./WelcomeContext";

// Correct the configuration of configureStore
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WelcomeProvider>
      <Provider store={store}>
        <AuthProvider store={store}>
          <App />
        </AuthProvider>
      </Provider>
    </WelcomeProvider>
  </BrowserRouter >
);
