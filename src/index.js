import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import { UserProvider } from './context/user.context';
import { CartegoriesProvider } from './context/product .context';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/cart.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
  <CartegoriesProvider>
  <CartProvider>
  <App />
  </CartProvider>
  </CartegoriesProvider>
  </UserProvider>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
