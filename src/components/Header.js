import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="main-head">
            <nav aria-label="Main Navigation">
                <h1 id="logo">
                    <Link to="/" aria-label="Home">
                        Wisdomly
                    </Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/" aria-label="Go to Home page">Home</Link>
                    </li>
                    <li>
                        <Link to="/books" aria-label="Go to Books page">Books</Link>
                    </li>
                    <li>
                        <Link to="/cart" aria-label="Go to Cart page">Cart</Link>
                    </li>
                    <li>
                        <Link to="/checkout" aria-label="Go to Checkout page">Checkout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
