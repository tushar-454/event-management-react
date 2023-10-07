import { Typography } from '@material-tailwind/react';

const Banner = () => {
  return (
    <figure className='relative h-[850px] w-full my-10'>
      <img
        className='h-full w-full object-cover object-center brightness-50'
        src='https://i.postimg.cc/k4JhpksW/banner.jpg'
        alt='Banner'
      />
      <figcaption className='absolute bottom-20 md:bottom-20 left-2/4 w-[calc(100%-4rem)] md:w-[calc(100%-10rem)] lg:w-[calc(100%-4rem)] p-4 text-center md:px-28 md:py-12 -translate-x-2/4 justify-between rounded bg-[#0000009C] shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
        <Typography
          variant='h5'
          color='white'
          className='text-[1.5rem] md:text-3xl lg:text-6xl w-full'
        >
          Crafting Unforgettable Moments
        </Typography>
        <Typography
          color='gray'
          className='mt-2 text-lg lg:text-2xl text-gray-400'
        >
          Your Vision, Our Expertise, Every Event
        </Typography>
      </figcaption>
    </figure>
  );
};
export default Banner;
