import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BookContext } from "../context/books";
import { CartContext } from "../context/cart";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books } = useContext(BookContext);
  const { addToCart } = useContext(CartContext);

  const book = books.find((book) => book.id === id);

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="flex flex-row max-md:flex-col justify-center items-center">
      {/* Check if the book is found and render accordingly */}
      {!book ? (
        <h3>Book not found. Please go back to the list.</h3>
      ) : (
        <>
          <div className="my-4 md:my-6 mx-4 w-[30%] max-md:w-[80%] flex justify-center">
            <img
              id="book-img"
              src={book.image} 
              className="w-full max-w-[400px] max-md:w-[50%] rounded-xl hover:scale-[1.05] transition-all duration-500"
              alt={book.title}
            />
          </div>
          <div
            id="details"
            className="flex flex-col px-6 justify-around rounded-2xl border-2 border-gray-700 my-4 min-h-[600px] h-fit w-[55%] max-md:w-[85%] mx-4 "
          >
            <h2 className="font-bold text-3xl my-2 ">
              {book.title}
            </h2>
            <h3 className="font-semibold text-lg my-2">{book.author}</h3>
          
            <h4 className="font-semibold text-3xl my-2 flex flex-row items-center">
              <p className="mr-4"> &#8377;{book.price}</p>
              {/* <p className="mr-4 text-gray-400 line-through"> &#8377;{book.price}</p>
              <p className="text-lg my-3">{"(15% OFF) "}</p> */}
            </h4>

            <div className="flex flex-row max-md:flex-col ">
              <button 
                className="max-md:my-4 px-8 md:px-16 py-2 border-2 mx-4 border-gray-700 hover:bg-black rounded-lg hover:text-white transition-all"
                onClick={() => {
                  addToCart({ ...book, id });
                  navigate("/cart");
                }}
              >
                Add to cart
              </button>
            </div>

            <div>
              <h5 className="font-bold text-2xl">Description</h5>
              <p className="text">
                {isReadMore ? book.description.slice(0, 100) : book.description}
                <span
                  onClick={toggleReadMore}
                  className="read-or-hide cursor-pointer text-blue-500 hover:text-blue-800"
                >
                  {isReadMore ? "...read more" : " show less"}
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetails;
