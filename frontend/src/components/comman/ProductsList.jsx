
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const ProductsList = () => {
    const product = [
        {
            "id": 1,
            "title": "Top Mirrorless Cameras",
            "image": "electronic/1.png",
            "cta": "Shop Now",
            "priceText": "From ₹1299",
            "brands": ["Canon", "Sony", "Fujifilm"]
        },
        {
            "id": 2,
            "title": "Best of Hair Straighteners",
            "image": "electronic/2.png",
            "cta": "",
            "priceText": "From ₹599",
            "brands": ["Philips", "Havells"]
        },
        {
            "id": 3,
            "title": "Best of Shavers",
            "image": "electronic/3.png",
            "cta": "",
            "priceText": "From ₹1,649",
            "brands": ["Philips", "Havells"]
        },
        {
            "id": 4,
            "title": "Printers",
            "image": "electronic/4.png",
            "cta": "",
            "priceText": "From ₹10,999",
            "brands": ["Epson"]
        },
        {
            "id": 5,
            "title": "Best of Hair Dryers",
            "image": "electronic/5.png",
            "cta": "",
            "priceText": "From ₹549",
            "brands": ["Realme", "Philips"]
        },
        {
            "id": 2,
            "title": "Best of Hair Straighteners",
            "image": "electronic/1.png",
            "cta": "",
            "priceText": "From ₹599",
            "brands": ["Philips", "Havells"]
        },
        {
            "id": 3,
            "title": "Best of Shavers",
            "image": "electronic/shaver.webp",
            "cta": "",
            "priceText": "From ₹1,649",
            "brands": ["Philips", "Havells"]
        },
        {
            "id": 4,
            "title": "Printers",
            "image": "electronic/printer.webp",
            "cta": "",
            "priceText": "From ₹10,999",
            "brands": ["Epson"]
        },
    ]
    return (
        <div className="overflow-hidden  flex-1  p-2   rounded-sm">
            <Swiper
                slidesPerView={4.2}
                spaceBetween={5}
                navigation={true}
                watchOverflow={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    product.map((data) => {
                        return <SwiperSlide className=' bg-white cursor-pointer group'>
                            <div className=' prod-img  overflow-hidden'>
                                <img src={data.image} className='object-contain rounded-xl duration-300 transition-transform' alt="" />
                            </div>
                            {/* <div className='text-sm font-medium'>{data.title}</div> */}
                            {/* <div className='text-xs font-medium text-green-700'>{data.priceText}</div> */}
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default ProductsList
