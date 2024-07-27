import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./stylesProductions.scss";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Productions } from "../../layout/sections/sectionsthree/productions/Productions";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

import vasa from "./../../assets/images/Vasa.webp";

import PhotoSink from "./../../assets/images/PhotoSink.webp";
import kitchen from "./../../assets/images/kitchen.webp";

export const CaruselProductions = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ContainerForSectionsThree>
            <FlexWrapper align={"flex-start"} justify={"space-around"} wrap="wrap" content="flex-start">
              <WrapInProduction>
                <Productions
                  photo={vasa}
                  title="Kratki"
                  description="Каминная топка Kratki ZUZIA LPT"
                  price="16 490"
                />
              </WrapInProduction>
              <WrapInProduction>
                <Productions
                  photo={vasa}
                  title="Kratki"
                  description="Каминная топка Kratki ZUZIA LPT"
                  price="16 490"
                />
              </WrapInProduction>
              <WrapInProduction>
                <Productions
                  photo={vasa}
                  title="Kratki"
                  description="Каминная топка Kratki ZUZIA LPT"
                  price="16 490"
                />
              </WrapInProduction>
              <WrapInProduction>
                <Productions
                  photo={vasa}
                  title="Kratki"
                  description="Каминная топка Kratki ZUZIA LPT"
                  price="16 490"
                />
              </WrapInProduction>
              
            </FlexWrapper>
          </ContainerForSectionsThree>
        </SwiperSlide>
        <SwiperSlide>
          <img src={PhotoSink} />
        </SwiperSlide>
        <SwiperSlide>
        <ContainerForSectionsThree>
            <FlexWrapper align={"flex-start"} justify={"space-around"} wrap="wrap" content="flex-start">
              <WrapInProduction>
                <Productions
                  photo={vasa}
                  title="Kratki"
                  description="Каминная топка Kratki ZUZIA LPT"
                  price="16 490"
                />
              </WrapInProduction>
              <WrapInProduction>
                <Productions
                  photo={vasa}
                  title="Kratki"
                  description="Каминная топка Kratki ZUZIA LPT"
                  price="16 490"
                />
              </WrapInProduction>
              <WrapInProduction>
                <Productions
                  photo={vasa}
                  title="Kratki"
                  description="Каминная топка Kratki ZUZIA LPT"
                  price="16 490"
                />
              </WrapInProduction>
              <WrapInProduction>
                <Productions
                  photo={vasa}
                  title="Kratki"
                  description="Каминная топка Kratki ZUZIA LPT"
                  price="16 490"
                />
              </WrapInProduction>
              
            </FlexWrapper>
          </ContainerForSectionsThree>
        </SwiperSlide>
        <SwiperSlide>
          <img src={kitchen} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
const ContainerForSectionsThree = styled.div`
  position: relative;
  height: 730px;
  width: 100%;
`;
const WrapInProduction  = styled.div`
  height: 100%;
  height: 360px;
  background-color: white;
  margin-bottom: 30px;
`;
