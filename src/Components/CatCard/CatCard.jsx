import React from 'react';
import { Link } from 'react-router-dom';

const CatCard = ({ items }) => {
  return (
    <Link to='/gigs?cat=design'>
      <div className='w-[252px] h-[344px] text-white rounded-sm cursor-pointer relative'>
        <img src={items.img} className='w-[100%] h-[100%] object-cover ' />
        <span className='absolute top-[15px] left-[15px] text-white font-bold'>
          {items.desc}
        </span>
        <span className='absolute left-[15px] top-[40px] text-white font-bold'>
          {items.title}
        </span>
      </div>
    </Link>
  );
};

export default CatCard;
