import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import bookstorelogo from '../assets/book-store-logo.jpg';
import { useAuthenticator, Button } from "@aws-amplify/ui-react"; 

const Header = () => {
    const [menubar , setMenubar] = useState(false)
    const { user, signOut } = useAuthenticator((context) => [context.user])
    return (
        <>
        <div className=' bg-[#181618] flex flex-row justify-between items-center py-4 text-white font-semibold px-10'>
            <Link to='' className='w-[60px] max-md:w-[40px]'><img src={bookstorelogo} className=' rounded-[15px]' alt="" /></Link>
            <div className=' flex flex-row justify-center items-center text-2xl gap-16 py-2 max-md:hidden'>
                <Link to='/' className='h-fit hover:text-[#c87f21]' >Home</Link>
                <Link to = '/books' className=' h-fit hover:text-[#c87f21]' >Books</Link>
                <Link to = '/cart' className='h-fit hover:text-[#c87f21]' >Cart</Link>
            </div>
            <div className='flex flex-row gap-4 max-md:hidden'> 
            {user &&  <Button className='text-white hover:text-black' onClick={signOut}>Sign Out</Button>}
            <Link  to='contact' className=' max-md:hidden px-10 py-2 text-white border-2 border-white rounded  bg-none hover:bg-white hover:text-black  transition-all'>Contact</Link>
            </div>
            <button className='md:hidden' onClick={()=>{
                setMenubar(true);
                console.log(menubar)}}>Menu</button>
        </div>

        <div className={` md:hidden fixed right-0 top-0 z-10 h-full py-4 w-[80%] overflow-hidden bg-[#181618] ${menubar? 'translate-x-0' : 'translate-x-[600px]'} transition-all duration-300  flex flex-col items-start gap-5 px-4 text-white text-2xl`}>
            <button className='text-white text-3xl py-2 self-end px-4 my-2 border-white border-2' onClick={()=>{setMenubar(false)
            }}>X</button>
            <div className='border-b-2 border-white w-full my-2'></div>
            <Link to='/' className='h-fit text-3xl  hover:text-gray-500 my-4 w-full ' onClick={()=>setMenubar(false)} >Home</Link>
                <Link to = '/books' className='h-fit text-3xl  hover:text-gray-500 my-4  w-full ' onClick={()=>setMenubar(false)} >Books</Link>
                <Link to = '/cart' className='h-fit text-3xl  hover:text-gray-500 my-4  w-full ' onClick={()=>setMenubar(false)}>Cart</Link>
                <Link to='contact' className='h-fit text-3xl  hover:text-gray-500 my-4  w-full ' onClick={()=>setMenubar(false)} >Contact</Link>


        </div>
        </>
    )
};

export default Header;
