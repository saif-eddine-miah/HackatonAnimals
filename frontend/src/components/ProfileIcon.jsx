import React from "react";
// Import Swiper React components
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";

import "./ProfileIcon.css";

// import required modules
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation } from "swiper";

function ProfileIcon() {
  return (
    <Swiper navigation modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img
          className="photo_carrousel"
          src="https://img.icons8.com/color/96/000000/cat--v1.png"
          alt="chat"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="photo_carrousel"
          src="https://img.icons8.com/color/96/000000/dog.png"
          alt="Chien"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="photo_carrousel"
          src="https://img.icons8.com/color/96/000000/aggressive-shark.png"
          alt="Requin"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="photo_carrousel"
          src="https://img.icons8.com/color/96/000000/bird.png"
          alt="Oiseau"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="photo_carrousel"
          src="https://img.icons8.com/color/96/000000/pinguin.png"
          alt="Pingouin"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="photo_carrousel"
          src="https://img.icons8.com/color/96/000000/rabbit.png"
          alt="Lapin"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="photo_carrousel"
          src="https://img.icons8.com/color/96/000000/owl.png"
          alt="Hibou"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default ProfileIcon;
