import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Amplify
import {Amplify} from "aws-amplify";

// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookDetails from "./pages/BookDetails";
import Admin from './pages/Admin';

// Components
import Header from "./components/Header";


// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/books" element={<Books />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
