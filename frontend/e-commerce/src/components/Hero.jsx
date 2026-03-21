// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation , Autoplay} from 'swiper/modules';
const Hero = () => {
  return (
    <div className="h-[60vh]">
  <Swiper
    pagination={{ type: "progressbar" }}
    spaceBetween={30}
    loop={true}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    navigation={true}
    modules={[Pagination, Navigation, Autoplay]}
    className="h-full"
  >
    <SwiperSlide className="flex items-center justify-center">
      <img
        src="banner1.png"
        className="h-full w-full object-contain"
        alt=""
      />
    </SwiperSlide>

    <SwiperSlide className="flex items-center justify-center">
      <img
        src="banner2.png"
        className="h-full w-full object-contain"
        alt=""
      />
    </SwiperSlide>

    <SwiperSlide className="flex items-center justify-center">
      <img
        src="banner3.png"
        className="h-full w-full object-contain"
        alt=""
      />
    </SwiperSlide>
  </Swiper>
</div>
  )
}

export default Hero
