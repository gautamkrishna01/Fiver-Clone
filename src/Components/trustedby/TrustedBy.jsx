import React from 'react';

const TrustedBy = () => {
  return (
    <>
      <div className='bg-[#FBFBFA] h-[100px] flex justify-center'>
        <div className='w-[760px] flex items-center gap-[20px] justify-center'>
          <span>Truste by:</span>
          <img
            src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png'
            alt=''
            className='h-[50px]'
          />
          <img
            src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png'
            alt=''
            className='h-[50px]'
          />
          <img
            src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png'
            alt=''
            className='h-[50px]'
          />
          <img
            src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png'
            alt=''
            className='h-[50px]'
          />
          <img
            src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png'
            alt=''
            className='h-[50px]'
          />
        </div>
      </div>
    </>
  );
};

export default TrustedBy;
