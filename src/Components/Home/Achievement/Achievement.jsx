import { useState } from 'react';
import CountUp from 'react-countup';
import { BiHappyBeaming } from 'react-icons/bi';
import { FaAward } from 'react-icons/fa';
import { MdEventAvailable, MdRateReview } from 'react-icons/md';
import ScrollTrigger from 'react-scroll-trigger';
import SectionHead from '../../ReusableUI/SectionHead';

export default function Achievement() {
  const [counteron, setCounteron] = useState(false);
  return (
    <div className='w-full py-4'>
      <div className='mx-auto max-w-screen-2xl px-4'>
        <SectionHead
          title='Achievements'
          subTitle='Building Success, One Event at a Time: Our Achievements and Milestones in Crafting Unforgettable Experiences for Our Valued Clients.'
        />
        <div className='grid gap-10 lg:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 content-center justify-center bg-[#81ceed22] py-5'>
          <div data-aos='fade-up' className='flex flex-col gap-3 items-center'>
            <div className='icon'>
              <BiHappyBeaming className='text-9xl' />
            </div>
            <h1 className='text-3xl font-semibold'>Happiest Client</h1>
            <h1 className='text-6xl font-bold'>
              <ScrollTrigger onEnter={() => setCounteron(true)}>
                {counteron && (
                  <CountUp start={0} end={1640} duration={3} delay={0} />
                )}
              </ScrollTrigger>
            </h1>
          </div>
          <div
            data-aos='fade-down'
            className='flex flex-col gap-3 items-center'
          >
            <div className='icon'>
              <MdEventAvailable className='text-9xl' />
            </div>
            <h1 className='text-3xl font-semibold'>Total Event</h1>
            <h1 className='text-6xl font-bold'>
              <ScrollTrigger onEnter={() => setCounteron(true)}>
                {counteron && (
                  <CountUp start={0} end={1896} duration={3} delay={0} />
                )}
              </ScrollTrigger>
            </h1>
          </div>
          <div data-aos='fade-up' className='flex flex-col gap-3 items-center'>
            <div className='icon'>
              <MdRateReview className='text-9xl' />
            </div>
            <h1 className='text-3xl font-semibold'>Review</h1>
            <h1 className='text-6xl font-bold'>
              <ScrollTrigger onEnter={() => setCounteron(true)}>
                {counteron && (
                  <CountUp start={0} end={2247} duration={3} delay={0} />
                )}
              </ScrollTrigger>
            </h1>
          </div>
          <div
            data-aos='fade-down'
            className='flex flex-col gap-3 items-center'
          >
            <div className='icon'>
              <FaAward className='text-9xl' />
            </div>
            <h1 className='text-3xl font-semibold'>Event award</h1>
            <h1 className='text-6xl font-bold'>
              <ScrollTrigger onEnter={() => setCounteron(true)}>
                {counteron && (
                  <CountUp start={0} end={44} duration={2} delay={0} />
                )}
              </ScrollTrigger>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
