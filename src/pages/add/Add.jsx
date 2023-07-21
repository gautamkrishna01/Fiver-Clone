import React from 'react';

const Add = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1400px] py-[50px]'>
        <h1 className='font-bold mb-[30px]'>Add New Gig</h1>
        <div className='flex justify-between  gap-[100px]'>
          <div className='flex-1 flex flex-col gap-[10px] justify-between'>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              placeholder="e.g. I will do something I'm really good at"
              className='border p-[20px]'
            />
            <label htmlFor=''>Category</label>
            <select name='cats' id='cats' className='p-[20px] border'>
              <option value='design'>Design</option>
              <option value='web'>Web Development</option>
              <option value='animation'>Animation</option>
              <option value='music'>Music</option>
            </select>
            <label htmlFor=''>Cover Image</label>
            <input type='file' className='p-[20px]' />
            <label htmlFor=''>Upload Images</label>
            <input type='file' multiple className='p-[20px] ' />
            <label htmlFor=''>Description</label>
            <textarea
              name=''
              id=''
              placeholder='Brief descriptions to introduce your service to customers'
              cols='0'
              rows='16'
              className='border'
            ></textarea>
            <button className='border-none p-[10px] rounded-md text-white white bg-green-500 cursor-pointer'>
              Create
            </button>
          </div>
          <div className='flex-1 flex flex-col gap-[10px] justify-between'>
            <label htmlFor=''>Service Title</label>
            <input
              type='text'
              placeholder='e.g. One-page web design'
              className='p-[20px] border'
            />
            <label htmlFor=''>Short Description</label>
            <textarea
              name=''
              id=''
              placeholder='Short description of your service'
              cols='30'
              rows='10'
              className='p-[20px] border'
            ></textarea>
            <label htmlFor=''>Delivery Time (e.g. 3 days)</label>
            <input type='number' className='p-[20px] border' />
            <label htmlFor=''>Revision Number</label>
            <input type='number' />
            <label htmlFor=''>Add Features</label>
            <input
              type='text'
              placeholder='e.g. page design'
              className='p-[20px] border'
            />
            <input
              type='text'
              placeholder='e.g. file uploading'
              className='p-[20px] border'
            />
            <input
              type='text'
              placeholder='e.g. setting up a domain'
              className='p-[20px] border'
            />
            <input
              type='text'
              placeholder='e.g. hosting'
              className='p-[20px] border'
            />
            <label htmlFor=''>Price</label>
            <input type='number' className='p-[20px] border' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
