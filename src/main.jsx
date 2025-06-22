import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';

// link vào global style
import "@fontsource/roboto";

// set up react router
import { BrowserRouter, RouterProvider } from 'react-router'
import {router} from  './router/router.jsx'
// setup redux
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App> 
        <RouterProvider router={router} />
      </App>
    </Provider>
  </React.StrictMode>,
);
