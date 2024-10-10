import React, { useContext } from 'react';
import { CartContext } from '../context/cart';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext);

  if (!cart.length) {
    return <h3>Empty Cart</h3>;
  }

  return (
    <div className='h-[80vh] max-md:h-[150vh] flex flex-col justify-center items-center'>
    <section className="cart border-gray-500 border-[1px]  py-10">
      <header className='border-[1px] border-b-slate-700'>
        <h2>My Cart</h2>
      </header>
      <div className="cart-wrapper px-10 border-[1px] border-b-gray-500">
        {cart.map(({ id, title, price, image, amount }) => (
          <article key={id} className="cart-item">
            <div className="image" >
              <img className='border-[1px] border-gray-600' src={image} alt="cart item" />
            </div>
            <div className="details">
              <p className='font-semibold' >{title}</p>
              <p>&#8377; {price}</p>
            </div>
            <div className="amount">
              <button onClick={() => increaseAmount(id)}><FiChevronUp /></button>
              <p>{amount}</p>
              <button onClick={() => decreaseAmount(id, amount)}><FiChevronDown /></button>
            </div>
          </article>
        ))}
      </div>
      <div>
        <h3 className='my-8'>Total: &#8377; {total}</h3>
      </div>
      <div>
        <button className="btn rounded-lg px-4 text-center pb-[10px] mt-6" onClick={() => navigate('/checkout')}>Checkout</button>
      </div>
    </section>
    </div>
  );
};

export default Cart;
