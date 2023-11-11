import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Testimonial = () => {
  const [reviews,setReviews] = useState([])

  useEffect(()=>{
    fetch('reviews.json')
    .then( res => res.json())
    .then(data => setReviews(data))
  },[])
    return (
        <div className='container mx-auto md:px-10 mb-28'>
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"---What Our Clients Say---"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
          reviews?.map(item => <SwiperSlide key={item._id} className='md:px-14 space-y-4'>
          <Rating className='mx-auto'
        style={{ maxWidth: 180 }}
        value={item?.rating}
      />
      <FaQuoteLeft className='text-5xl mx-auto'/>
      <p className='text-xl'>
      {item?.details}
      </p>
      <h1 className='text-3xl font-medium text-[#CD9003] text-center'>{item?.name
}</h1>
          </SwiperSlide>)
        }
       
      
      </Swiper>
        </div>
    );
};

export default Testimonial;