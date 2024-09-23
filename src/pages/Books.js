import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { BookContext } from '../context/books';
import backgroundImage from '../assets/jason-leung-D4YrzSwyIEc-unsplash-1024x683.jpg.webp'

const Books = () => {
    const { books } = useContext(BookContext);

    if (!books.length) {
        return <h3>No Books Available</h3>;
    }

    return (
        <div 
        style={{ 
            backgroundImage: `url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '100vh' // Adjust height as needed 
        }}
    >
        <section className="books">
            {books.map(({ image, id, title }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`/books/${id}`} className="btn book__link">{title}</Link>
                </article>
            ))}
        </section>
    </div>
    
    );
};

export default Books;
