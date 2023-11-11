import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className='container mx-auto md:px-10 mb-28'>
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"---What Our Clients Say---"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='md:px-14 space-y-4'>
        <Rating className='mx-auto'
      style={{ maxWidth: 180 }}
      value={4}
    />
    <FaQuoteLeft className='text-5xl mx-auto'/>
    <p className='text-xl'>
    Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
    <h1 className='text-3xl font-medium text-[#CD9003] text-center'>JANE DOE</h1>
        </SwiperSlide>
        <SwiperSlide className='md:px-14 space-y-4'>
        <Rating className='mx-auto'
      style={{ maxWidth: 180 }}
      value={4}
    />
    <FaQuoteLeft className='text-5xl mx-auto'/>
    <p className='text-xl'>
    Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
    <h1 className='text-3xl font-medium text-[#CD9003] text-center'>JANE DOE</h1>
        </SwiperSlide>
        <SwiperSlide className='md:px-14 space-y-4'>
        <Rating className='mx-auto'
      style={{ maxWidth: 180 }}
      value={4}
    />
    <FaQuoteLeft className='text-5xl mx-auto'/>
    <p className='text-xl'>
    Various version have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>
    <h1 className='text-3xl font-medium text-[#CD9003] text-center'>JANE DOE</h1>
        </SwiperSlide>
      
      </Swiper>
        </div>
    );
};

export default Testimonial;