import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHead from '../../ReusableUI/SectionHead';
// import './styles.css';
const ClientHappiness = () => {
  return (
    <div>
      <SectionHead
        title='Client Happiness'
        subTitle='"Elevating Events, Exceeding Expectations: Hear What Our Satisfied Clients Have to Say About Their Unforgettable Experiences with Us."'
      />
      <div className='w-full h-96 brightness-50 bg-[url(https://i.postimg.cc/25NTt4KD/client-comment-bg.jpg)] bg-no-repeat bg-cover'>
        <div className='mx-auto max-w-screen-2xl'>
          <>
            <Swiper
              direction={'vertical'}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className='mySwiper'
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default ClientHappiness;
