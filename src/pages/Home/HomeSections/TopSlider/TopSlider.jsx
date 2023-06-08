import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TopSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const img1 =
    "https://images.squarespace-cdn.com/content/v1/59664e829de4bb0a4f3ee8aa/1501581269826-4MOFWHGKEI0STGEA6R9L/City_of-London_sunset.jpg?format=2500w";
  const img2 =
    "https://media.istockphoto.com/id/1183370267/photo/man-war-journalist-with-camera.jpg?s=612x612&w=0&k=20&c=sPijDuHBJjl41OevpToIA8S0N2WsXA-S3TR7LLnyQrE=";
    const img3 = "https://cdn.wallpapersafari.com/81/34/T3JMks.jpg"
    const img4 = "https://images.squarespace-cdn.com/content/v1/59da11e98419c28f51bab499/1568345122515-5Z847U4A0FUP6WMBHPPU/FortManle-1220_0101.jpg"
  return (
    <div className="">
        <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper "
      >
        {/* TODO: ADD TITLE TO PHOTOS */}
        <SwiperSlide>
          <img className="w-full md:h-screen" src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full md:h-screen" src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full  md:h-screen" src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full md:h-screen" src={img4} />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default TopSlider;
