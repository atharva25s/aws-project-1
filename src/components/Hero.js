import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero" role="banner">
            <div className="hero-content">
                <h2>Wisdom Books</h2>
                <p>A room without books is like a <br /> body without a soul.</p>
                <Link className="btn" to="/books" aria-label="View all books">
                    View All Books
                </Link>
            </div>
        </section>
    );
};

export default Hero;
