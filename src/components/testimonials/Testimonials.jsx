import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5>Ernest achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque fuga earum nesciunt commodi quis, architecto perferendis v
            itae officiis, beatae iusto aut incidunt molestiae. Maiores placeat voluptatibus velit maxime quas, suscipit eaque!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5>Ernest achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque fuga earum nesciunt commodi quis, architecto perferendis v
            itae officiis, beatae iusto aut incidunt molestiae. Maiores placeat voluptatibus velit maxime quas, suscipit eaque!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5>Ernest achiever</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque fuga earum nesciunt commodi quis, architecto perferendis v
            itae officiis, beatae iusto aut incidunt molestiae. Maiores placeat voluptatibus velit maxime quas, suscipit eaque!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
export default Testimonials