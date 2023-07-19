import React from 'react';
import Slider from 'infinite-react-carousel';

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <>
      <div className='fles justify-center px-[100px] py-0'>
        <div className='w-[1400px]'>
          <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Slide;
