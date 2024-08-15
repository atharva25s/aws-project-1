import React, { useState, useEffect, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce((acc, { amount, price }) => acc + amount * price, 0);
    setTotal(parseFloat(totalAmount.toFixed(2)));
  }, [cart]);

  const increaseAmount = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        )
      );
    }
  };

  const addToCart = (book) => {
    const { id, title, price, image } = book;
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        return [...prevCart, { id, title, image, price, amount: 1 }];
      }
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, increaseAmount, decreaseAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
