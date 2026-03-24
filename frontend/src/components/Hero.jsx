// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const Hero = () => {
  return (
    <div className=" mx-2 px-2 py-2   rounded-sm">
      <Swiper
      slidesPerView={2.5}  
        spaceBetween={30}
        loop={true}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Pagination ,Autoplay]}
        className=" "
      >
        <SwiperSlide className="flex items-center justify-center bg-white mt-2">
          <img
            src="./electronic/banner1.jpg"
            className=" w-full object-contain rounded-2xl"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="flex items-center justify-center bg-white mt-2">
          <img
            src="./electronic/banner2.jpg"
            className="w-full object-contain rounded-2xl"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="flex items-center bg-white justify-center mt-2">
          <img
            src="./electronic/banner3.png"
            className="w-full object-contain rounded-2xl"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero
