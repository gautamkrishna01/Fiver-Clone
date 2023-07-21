import React from 'react';
import { Link } from 'react-router-dom';

const Messages = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1400px] py-[50px]'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold'>Message</h1>
          <Link to='/add'></Link>
        </div>
        <table className='w-[100%]'>
          <tr className=' w-[50px] h-[25px]'>
            <th className='text-left'>Buyer</th>
            <th className='text-left'>Last Message</th>
            <th className='text-left'>Date</th>
            <th className='text-left'>Actions</th>
          </tr>
          <tr>
            <td>Ram Shah</td>
            <td>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              beatae dignissimos eligendi?
            </td>
            <td>88</td>
            <td>123</td>
            <td>
              <img
                className='w-[20px] cursor-pointer '
                src='./img/message.png'
                alt=''
              />
            </td>
          </tr>
          <tr>
            <td>Ram shah</td>
            <td>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              beatae dignissimos eligendi?
            </td>
            <td>88</td>
            <td>123</td>
            <td>
              <img
                className='w-[20px] cursor-pointer '
                src='./img/message.png'
                alt=''
              />
            </td>
          </tr>
          <tr>
            <td>Ram shah</td>
            <td>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
              beatae dignissimos eligendi?
            </td>
            <td>88</td>
            <td>123</td>
            <td>
              <img
                className='w-[20px] cursor-pointer '
                src='./img/message.png'
                alt=''
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
