import React, { useEffect, useState, createContext } from "react";
import { Amplify } from 'aws-amplify';
import { generateClient } from "aws-amplify/api";
import config from '../aws-exports.js';
import { v4 as uuidv4 } from "uuid";
import { listBooks } from "../api/queries";
import { processOrder } from "../api/mutations";

Amplify.configure(config);
const BookContext = createContext();
const client = generateClient({
  authMode: 'apiKey' // Adjust as per your authentication type
});

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails,
    };
    try {
      await client.graphql({query: processOrder, variables: { input: payload }});
      console.log("Order is successful");
    } catch (error) {
      console.error("Order failed:", error);
    }
  };


  const fetchBooks = async () => {
    try {
      setLoading(true);
      const { data } = await client.graphql({
        query: listBooks,
      });
      const books = data.listBooks.items || [];
      const featuredBooks = books.filter((book) => book.featured);
      setBooks(books);
      setFeatured(featuredBooks);
    } catch (error) {
      console.error("Error fetching books:", JSON.stringify(error, null, 2));
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <BookContext.Provider value={{ books, featured, loading, checkout }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
