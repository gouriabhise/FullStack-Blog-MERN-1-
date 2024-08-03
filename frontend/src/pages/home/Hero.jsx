import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div
     className='flex flex-col md:flex-row 
     justify-between items-center md:gap-14 gap-8
     '>
      <div className='md:w-1/2 w-full text-center'>
        <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>This is my first blog</h1>
      <p className='py-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident necessitatibus asperiores eius error commodi reiciendis exercitationem nostrum cum ratione sit tempore est aut illo optio, quae pariatur deleniti incidunt! Explicabo.
      </p>
      </div>
      <div className='md:w-1/2 w-full mx-auto bg-white'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}

        pagination={{
          clickable: true,
        }}

        autoplay={{
            delay:1500,
            disableOnInteraction:false
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://cdn.pixabay.com/photo/2021/11/17/15/07/paris-6803796_960_720.jpg" className='w-full lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://cdn.pixabay.com/photo/2022/05/22/11/00/arc-de-triomphe-7213188_960_720.jpg" className='w-full lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>
        <SwiperSlide><img src='https://cdn.pixabay.com/photo/2014/11/02/18/23/arc-de-triomphe-514288_960_720.jpg' className='w-full lg:h-[420px] sm:h-96 h-80'/></SwiperSlide>
        
      </Swiper>

      </div>
    </div>
  )
}

export default Hero
