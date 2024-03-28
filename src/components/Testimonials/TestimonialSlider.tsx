import React from 'react'
import Slider from 'react-slick'
import { ITestimonial } from './Testimonials';
import Testimonial from './Testimonial';

interface TestimonialSliderProps {
  data: ITestimonial[]
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({data}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      <Slider {...settings}>
        {data.map((item, index) => {
          return <Testimonial testimonialData={item} key={index} />
        })}
      </Slider>
  );
}

export default TestimonialSlider
