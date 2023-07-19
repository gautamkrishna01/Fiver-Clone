import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ items }) => {
  return (
    <Link to=''>
      <div>
        <div className='w-[300px] h-[300px] rounded-lg cursor-pointer'>
          <img
            src={items.img}
            alt=''
            className='w-[100%] h-[70%] object-cover'
          />
          <div className='flex items-center gap-[15px]'>
            <img src={items.pp} className=' w-[40px] h-[40px] rounded-[50%]' />
            <div className='text-lg'>
              <h2>{items.cat}</h2>
              <span>{items.username}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
