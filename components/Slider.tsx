

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';

 const Slider = () => {
return (
    <Swiper
    spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
 
        <SwiperSlide>
           slide 1
        </SwiperSlide>
  
    </Swiper>
)
}

export default Slider