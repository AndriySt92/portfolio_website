import React, { useState, useEffect, useMemo } from 'react';
import './testimonial.scss';

import { images } from '../../constants'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';


interface ITestimonials {
  title: string
  company: string
  img: string
  feedback: string
}

interface IBrands {
  title: string
  img: string
}


export const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);;

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  const testimonials = useMemo(() => [
    {title: 'Michael', company: 'Google', img: images.react, feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!'},
    {title: 'Michael', company: 'Meta', img: images.html, feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!'},
    {title: 'Michael', company: 'Twitter', img: images.css, feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!'},
    {title: 'Michael', company: 'Google', img: images.redux, feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!'},
    {title: 'Michael', company: 'Meta', img: images.javascript, feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!'},
    {title: 'Michael', company: 'Twitter', img: images.figma, feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit!'},
  ], [])

  const brands = useMemo(() => [
    {title: 'adidas', img: images.adidas },
    {title: 'amazon', img: images.amazon },
    {title: 'bolt', img: images.bolt },
    {title: 'asus', img: images.asus },
    {title: 'skype', img: images.skype },
    {title: 'spotify', img: images.spotify },

  ], [])

  return (
    <>
      <div className="app__testimonial-item app__flex">
        <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].title} />
        <div className="app__testimonial-content">
          <p className="p-text">{testimonials[currentIndex].feedback}</p>
          <div>
            <h4 className="bold-text">{testimonials[currentIndex].title}</h4>
            <h5 className="p-text">{testimonials[currentIndex].company}</h5>
          </div>
        </div>
      </div>

      <div className="app__testimonial-btns app__flex">
        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
          <HiChevronLeft />
        </div>

        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
          <HiChevronRight />
        </div>
      </div>

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={index}
          >
            <img src={brand.img} alt={brand.title} />
          </motion.div>
        ))}
      </div>
    </>
  );
};
