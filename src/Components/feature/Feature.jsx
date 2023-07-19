import React from 'react';

const Feature = () => {
  return (
    <div className='h-[600px] flex justify-center bg-gray-500 text-white'>
      <div className='w-[1400px] flex items-center '>
        <div className='flex flex-col gap-[30px]'>
          <h1 className='text-4xl font-bold'>
            Find the perfect feelance services foryour business
          </h1>
          <div className='flex items-center justify-between bg-white rounded-md'>
            <div className='flex items-center gap-[20px]'>
              <img
                src='/img/search.png'
                alt=''
                className='w-[20px] h-[20px] m-[20px]'
              />
              <input
                type='text'
                placeholder='Try building mobile app'
                className='border-none outline-none'
              />
            </div>
            <button className='w-[120px] h-[60px] border-none bg-green-300 text-white cursor-pointer'>
              Search
            </button>
          </div>
          <div className='flex gap-[10px]'>
            <span>Popular</span>
            <button className='text-white border px-[10px] py-[5px] cursor-pointer rounded-lg text-lg'>
              Web Design
            </button>
            <button className='text-white border px-[10px] py-[5px] rounded-lg text-lg'>
              Wordpress
            </button>
            <button className='text-white border px-[10px] py-[5px] rounded-lg text-lg'>
              Logo Design
            </button>
            <button className='text-white border px-[10px] py-[5px] rounded-lg text-lg'>
              AI Service
            </button>
          </div>
        </div>
        <div className='h-[100%] object-contain'>
          <img src='./img/man.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Feature;
