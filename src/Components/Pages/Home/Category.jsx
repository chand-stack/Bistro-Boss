import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <div className='container mx-auto'>
         <SectionTitle
         subHeading={"---From 11:00am to 10:00pm---"}
         heading={"ORDER ONLINE"}></SectionTitle>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div>
           <img className='mx-auto' src={img1} alt="" />
            <h1 className='text-2xl md:text-3xl text-white -mt-8 text-center'>SALADS</h1>
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div>
           <img className='mx-auto' src={img2} alt="" />
            <h1 className='text-2xl md:text-3xl text-white -mt-8 text-center'>PIZZAS</h1>
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div>
           <img className='mx-auto' src={img3} alt="" />
            <h1 className='text-2xl md:text-3xl text-white -mt-8 text-center'>SOUPS</h1>
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div>
           <img className='mx-auto' src={img4} alt="" />
            <h1 className='text-2xl md:text-3xl text-white -mt-8 text-center'>DESSERTS</h1>
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div>
           <img className='mx-auto' src={img5} alt="" />
            <h1 className='text-2xl md:text-3xl text-white -mt-8 text-center'>SALADS</h1>
           </div>
        </SwiperSlide>
      
        
      </Swiper>
        </div>
    );
};

export default Category;