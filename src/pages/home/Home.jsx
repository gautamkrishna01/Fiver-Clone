import React from 'react';
import Feature from '../../Components/feature/Feature';
import TrustedBy from '../../Components/trustedby/TrustedBy';
import Slide from '../../Components/Slide/Slide';
import { cards, projects } from '../../data';
import CatCard from '../../Components/CatCard/CatCard';
import ProjectCard from '../../Components/projectcard/ProjectCard';
const Home = () => {
  return (
    <>
      <Feature />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} items={card} />
        ))}
      </Slide>
      <div className='bg-[#F1FDF7] flex justify-center py-[100px] px-0'>
        <div className='flex items-center gap-[15px]'>
          <div className='flex flex-col gap-[20px]'>
            <h1 className='mb-[10px]'>
              A whole world of freelance talent at your fingertips
            </h1>
            <div className='flex items-center gap-[10px]'>
              <img src='./img/check.png' alt='' />
              The best for every budget
            </div>
            <p className='text-sm'>
              Find high-quality servides at every price points.No hourly
              rates,just project-based pricing.
            </p>
            <div className='flex items-center gap-[10px]'>
              <img src='./img/check.png' alt='' />
              The best for every budget
            </div>
            <p className='text-sm'>
              Find high-quality servides at every price points.No hourly
              rates,just project-based pricing.
            </p>
            <div className='flex items-center gap-[10px]'>
              <img src='./img/check.png' alt='' />
              The best for every budget
            </div>
            <p className='text-sm'>
              Find high-quality servides at every price points.No hourly
              rates,just project-based pricing.
            </p>
            <div className='flex items-center gap-[10px]'>
              <img src='./img/check.png' alt='' />
              The best for every budget
            </div>
            <p className='text-sm'>
              Find high-quality servides at every price points.No hourly
              rates,just project-based pricing.
            </p>
            <div className='flex items-center gap-[10px]'>
              <img src='./img/check.png' alt='' />
              The best for every budget
            </div>
            <p className='text-sm'>
              Find high-quality servides at every price points.No hourly
              rates,just project-based pricing.
            </p>
          </div>
          <div className='items'>
            <video src='./img/video.mp4' controls className='w-[720px]' />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} items={card} />
        ))}
      </Slide>
    </>
  );
};

export default Home;
