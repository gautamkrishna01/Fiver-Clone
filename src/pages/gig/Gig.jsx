import { Slider } from 'infinite-react-carousel';
import React from 'react';

const Gig = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-[1400px] py-[30px] px-[0px] flex  gap-[50px]'>
        <div className='flex-2 flex flex-col gap-[20px]'>
          <span className='font-bold text-2xl'>Liverr Graphics & Design </span>
          <h1 className='font-bold'>I will create ai generated art for you</h1>
          <div className='flex items-center gap-[10px]'>
            <img
              className='w-[32px] h-[32px] rounded-[50%]'
              src='https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <span className='font-bold'>Anna Bell</span>
            <div className='flex items-center gap-[5px]'>
              <img src='/img/star.png' alt='' className='w-[14px] h-[14px]' />
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <img src='/img/star.png' alt='' />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className='slider'>
            <img
              src='https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
              className='max-h-[500px] object-cover'
            />
            <img
              src='https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <img
              src='https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className='mt-[50px] flex flex-col gap-[20px]'>
            <h2>About The Seller</h2>
            <div className='flex items-center gap-[20px]'>
              <img
                src='https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600'
                alt=''
                className='w-[100px] h-[100px] rounded-[50%]'
              />
              <div className='flex flex-col gap-[10px]'>
                <span>Anna Bell</span>
                <div className='flex items-center gap-[5px]'>
                  <img
                    src='/img/star.png'
                    alt=''
                    className='w-[14px] h-[14px]'
                  />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <img src='/img/star.png' alt='' />
                  <span>5</span>
                </div>
                <button className='bg-white rounded-md border p-[10px] cursor-pointer hover:bg-green-500'>
                  Contact Me
                </button>
              </div>
            </div>
            <div className='border rounded-md p-[20px] mt-[20px]'>
              <div className='w-[300px] flex flex-wrap justify-between'>
                <div className='w-[300px] flex justify-between gap-[10px] mb-[20px]'>
                  <span className='title'>From</span>
                  <span className='desc'>USA</span>
                </div>
                <div className='w-[300px] flex justify-between gap-[10px] mb-[20px]'>
                  <span className='title'>Member since</span>
                  <span className='desc'>Aug 2022</span>
                </div>
                <div className='w-[300px] flex justify-between gap-[10px] mb-[20px]'>
                  <span className='title'>Avg. response time</span>
                  <span className='desc'>4 hours</span>
                </div>
                <div className='w-[300px] flex justify-between gap-[10px] mb-[20px]'>
                  <span className='title'>Last delivery</span>
                  <span className='desc'>1 day</span>
                </div>
                <div className='w-[300px] flex justify-between gap-[10px] mb-[20px]'>
                  <span className='title'>Languages</span>
                  <span className='desc'>English</span>
                </div>
              </div>
              <hr className='border mb-[20px]' />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className='mt-[50px]'>
            <h2>Reviews</h2>
            <div className='flex flex-col gap-[20px] my-[20px] mx-0'>
              <div className='flex items-center '>
                <img
                  className='h-[50px] w-[50px] rounded-[50%]'
                  src='https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600'
                  alt=''
                />
                <div className='flex items-center   gap-3'>
                  <span>Garner David</span>
                  <div className='flex items-center gap-3'>
                    <img
                      src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                      alt=''
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>

              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
            </div>
            <hr className='border' />
          </div>
        </div>
        <div className='flex-1 border p-[20px] rounded-md flex flex-col gap-[20px] max-h-[500px] border-black sticky top-[150px] '>
          <div className='flex items-center justify-between '>
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p className='my-[10px]'>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[10px]'>
              <img src='/img/clock.png' alt='' className='w-[10px]' />
              <span>2 Days Delivery</span>
            </div>
            <div className='flex items-center gap-[10px]'>
              <img src='/img/recycle.png' alt='' className='w-[10px]' />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className='flex items-center gap-[10px]'>
            <div className='flex items-center gap-[10]'>
              <img src='/img/greencheck.png' alt='' className='w-[14px]' />
              <span>Prompt writing</span>
            </div>
            <div className='flex items-center gap-[10]'>
              <img src='/img/greencheck.png' alt='' className='w-[14px]' />
              <span>Artwork delivery</span>
            </div>
            <div className='flex items-center gap-[10]'>
              <img src='/img/greencheck.png' alt='' className='w-[14px]' />
              <span>Image upscaling</span>
            </div>
            <div className='flex items-center gap-[10]'>
              <img src='/img/greencheck.png' alt='' className='w-[14px]' />
              <span>Additional design</span>
            </div>
          </div>
          <button className='border bg-green-500 rounded-md cursor-pointer'>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
