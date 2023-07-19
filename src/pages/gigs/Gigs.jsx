import React, { useState } from 'react';
import GigsCard from '../../Components/gigsCard/GigsCard';
import { gigs } from '../../data';
const Gig = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <>
      <div className='flex justify-center'>
        <div className='w-[1400px] px-[0] py-[30px] flex flex-col gap-[15px]'>
          <span className=''>Fiver Graphics and Design</span>
          <h1 className='font-bold text-2xl'>AI Artist</h1>
          <p>
            Explore the boundaries of art and technology with Fiver's AI artists
          </p>
          <div className='flex justify-between items-center'>
            <div className='flex items-center justify-between'>
              <span>Budget</span>
              <input
                type='text'
                placeholder='min'
                className='p-[5px] border outline-none'
              />
              <input
                type='text'
                placeholder='max'
                className='p-[5px] border outline-none'
              />
              <button className='bg-green-500 cursor-pointer py-[5px] px-[15px] mx-[3px] rounded-lg '>
                Apply
              </button>
            </div>
            <div className='flex items-center gap-[20px] relative'>
              <span className=''>SortBy</span>
              <span>{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
              <img
                src='./img/down.png'
                className='w-[15px] '
                onClick={() => setOpen(!open)}
              />
              {open && (
                <div className='p-[20px] rounded-lg border absolute top-[30px] right-0 flex flex-col gap-[20px]'>
                  {sort === 'sales' ? (
                    <span
                      className='cursor-pointer font-bold'
                      onClick={() => reSort('createdAt')}
                    >
                      Newest
                    </span>
                  ) : (
                    <span
                      className='cursor-pointer font-bold'
                      onClick={() => reSort('sales')}
                    >
                      Best Selling
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-wrap'>
            {gigs.map((gig) => (
              <GigsCard key={gig.id} items={gig} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gig;
