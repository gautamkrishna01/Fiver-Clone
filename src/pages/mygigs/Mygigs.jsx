import React from 'react';
import { Link } from 'react-router-dom';

const Mygigs = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1400px] py-[50px]'>
        <div className='flex items-center justify-between'>
          <h1>Gigs</h1>
          <Link to='/add'>
            <button className='bg-green-600 text-white p-[10px] rounded-lg'>
              Add New Gig
            </button>
          </Link>
        </div>
        <table className='w-[100%]'>
          <tr className=' w-[50px] h-[25px]'>
            <th className='text-left'>Image</th>
            <th className='text-left'>Title</th>
            <th className='text-left'>Price</th>
            <th className='text-left'>Sales</th>
            <th className='text-left'>Action</th>
          </tr>
          <tr>
            <td>
              <img
                className='w-[50px] h-[25px]'
                src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
            </td>
            <td>Gigs1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img
                className='w-[20px] cursor-pointer '
                src='./img/delete.png'
                alt=''
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className='w-[50px] h-[25px]'
                src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
            </td>
            <td>Gigs1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img
                className='w-[20px] cursor-pointer '
                src='./img/delete.png'
                alt=''
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className='w-[50px] h-[25px]'
                src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
              />
            </td>
            <td>Gigs1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img
                className='w-[20px] cursor-pointer '
                src='./img/delete.png'
                alt=''
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Mygigs;
