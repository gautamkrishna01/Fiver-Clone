import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', isActive);
    return () => {
      window.removeEventListener('scroll', isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    userName: 'John Doe',
    isSeller: true,
  };
  return (
    <>
      <div
        className={
          active
            ? ' flex justify-center bg-[green]  flex-col items-center  sticky top-0 z-[999px] text-white'
            : '      flex justify-center bg-[#1C3A17]  flex-col items-center text-white'
        }
      >
        <div className='w-[1400px] text-white  flex justify-between py-[20px]'>
          <div className='text-lg font-bold'>
            <Link to='/'>
              <span>Fiver</span>
            </Link>
            <span className='text-green-400'>.</span>
          </div>
          <div className='flex gap-[24px] items-center font-bold'>
            <Link to='/gigs'>
              {' '}
              <span>Gigs</span>
            </Link>
            <Link to='add'>
              {' '}
              <span>Add New Gigs</span>
            </Link>

            <Link to='/orders'>
              {' '}
              <span>Order</span>
            </Link>
            {<span>Become a Sellers</span>}
            <button className='bg-green-400 hover:bg-green-700 text-gray-400 text-white py-[10px] px-[20px] cursor-pointer border rounded-sm'>
              Join
            </button>
          </div>
        </div>
        {active && (
          <>
            <hr className='w-[100%] h-0 border' />
            <div className='w-[1400px] px-[10px] flex justify-between'>
              <Link>Graphics and Design</Link>
              <Link>Vedio and Animations</Link>
              <Link>Writing and Translation</Link>
              <Link>AI Service</Link>
              <Link>Digital Marketing</Link>
              <Link>Music and Audio</Link>
              <Link>Programming and Tech</Link>
              <Link>Business</Link>
              <Link>Lifestyle</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
