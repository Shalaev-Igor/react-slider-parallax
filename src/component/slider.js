// Import Swiper React components
import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import {Mousewheel, Parallax} from 'swiper';
import creacteBuble from "../libs/particles/particles";
import Canvas from './canvas';

// Import Swiper styles
import 'swiper/css';
import "swiper/swiper-bundle.min.css";
import 'swiper/css/parallax';

const Slider = ({sliders}) => {

  React.useEffect(()=>{
    creacteBuble();
},[])

  return (
    <Swiper
      modules={[Parallax, Mousewheel]}
      spaceBetween={50}
      slidesPerView={1}
      speed={2400}
      parallax = {true}
      mousewheel = {true}
    >
      {
        sliders.map((slider, id) => (
          <SwiperSlide key={id}>
              {slider.imageUrl.map( (item , id) =>
                <div key={id} className="slider__layer" data-swiper-parallax={item.swiperparallax} style={{backgroundImage:`url(${item.url}`}}></div>
                )}
              <Canvas {...slider}/>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
export default Slider;