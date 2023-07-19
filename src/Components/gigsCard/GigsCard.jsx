import React from 'react';
import { Link } from 'react-router-dom';

const GigsCard = ({ items }) => {
  return (
    <Link to='/gigs/123'>
      <div className='w-[324px] h-[370px] border mb-[25px] '>
        <img src={items.img} className='w-[100%] h-[50%] object-cover' />
        <div className='py-[10px] px-[20px] flex flex-col gap-[15px]'>
          <div className='flex items-center gap-[10px]'>
            <img src={items.pp} className='w-[26px] h-[26px] rounded-md' />
            <span>{items.username}</span>
          </div>
          <p>{items.desc}</p>
          <div className='flex items-center gap-[5px]'>
            <img src='./img/star.png' className='w-[14px] h-[14px]' />
            <span>{items.star}</span>
          </div>
        </div>
        <hr className='h-0 border' />
        <div className='flex py-[10px] px-[20px] items-center'>
          <img
            src='./img/heart.png'
            className='w-[16px] h-[16px] cursor-pointer'
          />
          <div className=''>
            <span>STARTING AT</span>
            <h2>${items.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigsCard;
