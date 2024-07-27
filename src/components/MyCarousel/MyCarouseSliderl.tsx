import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import PhotoOne from "./../../assets/images/Duschewaya.webp";
import PhotoTwo from "./../../assets/images/KitchenTwo.webp";
import PhotoThree from "./../../assets/images/MirrorAndShowerTwo.webp";
import PhotoFour from "./../../assets/images/PhotoPanel.webp";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './stylesone.scss';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';

export const MyCarousel =() => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Photo src={PhotoOne} />
        </SwiperSlide>
        <SwiperSlide>
          <Photo src={PhotoTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <Photo src={PhotoThree} />
        </SwiperSlide>
        <SwiperSlide>
          <Photo src={PhotoFour}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const Photo = styled.img`
  width: 1040px;
  height: 710px;
    object-fit: cover;
`;