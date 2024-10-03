import React, { useState } from 'react';
import { generateClient } from '@aws-amplify/api';
import { listBooks } from "../api/queries";
import { Link } from "react-router-dom";

const client = generateClient();

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const bookData = await client.graphql({
        query: listBooks,
        variables: {
          filter: {
            title: {
              contains: searchTerm, // Searches for books containing the search term in the title
            },
          },
          limit: 20, // Adjust the limit as needed
        },
      });
      setBooks(bookData.data.listBooks.items);
    } catch (err) {
      console.error('Error searching books:', err);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-full mx-4'>
      <div className='flex items-center max-md:w-[80%] w-[60%] justsify-center m-6'>
        <input

          className='pl-4 bg-gray-200 md:w-full rounded-2xl p-1'
          type="text"
          placeholder="Search books by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button


          onClick={handleSearch}

          className='ml-2 mt-1 border-2 p-2 bg-slate-800 border-blue-100 rounded-full'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        </button>
      </div>

      {searchTerm != '' && <div className='  items-center flex justify-center flex-row mad-md:flex-col flex-wrap bg-gray-500  bg-opacity-30 backdrop-blur-md rounded-[20px] p-6 shadow-2xl'>
        {books.length > 0 ? (
          books.map((book) => (
            <article key={book.id} className="book">
              <div className="book-image">
                <img src={book.image} alt={book.title} />
              </div>
              <Link to={`/books/${book.id}`} className="btn book-link">
                {book.title.length > 10 ? `${book.title.slice(0, 8)}...` : book.title}
              </Link>
            </article>
          ))
        ) : 
          
          searchTerm === '' ? null : <p>No books found</p>
        }
      </div>} 
    </div>
  );
};

export default SearchBar;
