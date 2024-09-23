import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import { BookProvider } from "./context/books";
import App from './App';
import './index.css';
import { CartProvider } from './context/cart';
import { Authenticator, View } from '@aws-amplify/ui-react';

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with providers
root.render(
  <React.StrictMode>
    <Authenticator.Provider> 
      <View>
        <BookProvider>
          <CartProvider>
            <App /> 
          </CartProvider>
        </BookProvider>
      </View> 
    </Authenticator.Provider>   
  </React.StrictMode>
);

     