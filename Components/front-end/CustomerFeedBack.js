import { Swiper, SwiperSlide } from 'swiper/react';
import CustomerCard from './components/CustomerCard';
import 'swiper/css';
import "swiper/css/pagination";
import useTestimonial from './hooks/useTestimonial.ts';


function CustomerFeedBack() {
        const { testimonials } = useTestimonial();

        return (
                <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        pagination={{
                                clickable: true,
                        }}
                        breakpoints={{
                                300: {
                                        slidesPerView: 1,
                                        spaceBetween: 40,
                                },
                                524: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                },
                                768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                },
                                1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                },
                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                >

               {testimonials
                  ? testimonials.map((testimonial, index) => (
                  <SwiperSlide key={`${index}-${testimonial.name}`}>
                    <CustomerCard
                      image={testimonial.image}
                      name={testimonial.name}
                      msg={testimonial.message}
                    />
                  </SwiperSlide>
                ))
              : null}               

                </Swiper>

        );
}
export default CustomerFeedBack;