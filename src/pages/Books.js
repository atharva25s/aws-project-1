import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { BookContext } from '../context/books';
import backgroundImage from '../assets/jason-leung-D4YrzSwyIEc-unsplash-1024x683.jpg.webp'
import SearchBar from './SearchBar';

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
            //  Adjust height as needed 
        }}
        >
        <div className='flex justify-center items-center flex-col '>
            <div className="w-full"> 
                <SearchBar />
            </div>
        

            <section className="flex flex-row max-md:flex-col w-[80%] flex-wrap justify-center items-center ">
            {books.map(({ image, id, title }) => (
                <article key={id} className="book ">
                    <div className="book-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`/books/${id}`} className="btn book-link">
                                {title.length > 10 ? `${title.slice(0, 8)}...` : title}
                    </Link>
                </article>
            ))}
        </section>

        </div>
    </div>
    
    );
};

export default Books;
