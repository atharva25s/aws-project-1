import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/books";
import FeaturesPage from './FeaturesPage'
import bookstorelogo from '../assets/book-store-logo.jpg'
import Footer from "../components/Footer";

const Home = () => {
    const { featured } = useContext(BookContext);

    if (!featured.length) {
        return <h3>No Featured Books</h3>;
    }

    return (
        <>
            <div className=" w-full flex flex-col justify-center">
            <div className=" bg-[url('https://images.unsplash.com/photo-1549675584-91f19337af3d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] md:h-[100vh] bg-no-repeat bg-center justify-center items-center flex">
            <img className=' h-[300px] rounded-[50px] my-8' src={bookstorelogo} alt="" /></div>
            <div className="flex justify-center items-center bg-[#181618] h-[400px]">
                <section className="text-center gap-4 flex flex-col items-center text-3xl max-sm:text-2xl justify-center font-extrabold p-8 bg-[#2B2629] m-4 w-[60%] max-md:w-full font-serif  ">
                    <h3 className="text-[#08BCA9]">Our Vision</h3>
                    <p className="text-white">To provide free access to a wide range of books for all book lovers, fostering a love for reading.</p>
                </section>
            </div>
            <section className="flex-col w-full items-center  justify-center bg-[#2b2728]  ">
                <header className="featured-head">
                    <h3>Featured Collection</h3>
                </header>
                <div className=" bg-[#2B2629] m-4 font-serif flex flex-row max-md:flex-col items-center justify-center flex-wrap self-center gap-4">
                    {featured.map(({ id, image, title }) => (
                        <article key={id} className="book featured-book">
                            <div className="book-image">
                                <img src={image} alt={title} />
                            </div>
                            <Link to={`/books/${id}`} className="btn book-link">
                                {title.length > 10 ? `${title.slice(0, 8)}...` : title}
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
            </div>
        <FeaturesPage/>
        <Footer/>
        </>
    );
};

export default Home;
