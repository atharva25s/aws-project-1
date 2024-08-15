import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; // updated from useHistory
import { BookContext } from "../context/books";
import { CartContext } from "../context/cart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

const CheckoutForm = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { checkout } = useContext(BookContext);
  const [orderDetails, setOrderDetails] = useState({ cart, total, address: "", token: null });
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // updated from useHistory

  useEffect(() => {
    if (orderDetails.token) {
      checkout(orderDetails);
      clearCart();
      navigate("/"); // updated from history.push
    }
  }, [orderDetails, checkout, clearCart, navigate]);

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    if (!stripe || !card) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error, token } = await stripe.createToken(card);
    if (error) {
      // Inform the user if there was an error.
      setError(error.message);
    } else {
      setError(null);
      // Send the token to your server.
      setOrderDetails({ ...orderDetails, token: token.id });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout-form">
        <label htmlFor="checkout-address">Shipping Address</label>
        <input
          id="checkout-address"
          type="text"
          onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
        />
        <div className="stripe-section">
          <label htmlFor="stripe-element"> Credit or debit card </label>
          <CardElement id="stripe-element" options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
        </div>
        {error && <div className="card-errors" role="alert">{error}</div>}
      </div>
      <button type="submit" className="btn" disabled={!stripe}>
        Submit Payment
      </button>
    </form>
  );
};

export default CheckoutForm;
