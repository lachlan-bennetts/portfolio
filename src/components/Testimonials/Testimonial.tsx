import React from 'react'
import styled from 'styled-components'
import {IoIosQuote} from 'react-icons/io'
import { ITestimonial } from './Testimonials'

interface TestimonialProps {
  testimonialData: ITestimonial;
}

const Testimonial: React.FC<TestimonialProps> = ({testimonialData}) => {
  return (
    <Container>
      <Header>
        <span className='quote'><IoIosQuote /></span>
        <img className='logo-company' src={testimonialData.company} alt='Optus' />
      </Header>
      <Body>
        {testimonialData.description}
      </Body>
      <Footer>
        <a href={testimonialData.linkedInUrl}>
          <img src={testimonialData.image} alt={testimonialData.name} />
        </a>
        <div>
          <h1>{testimonialData.name}</h1>
          <p>{testimonialData.role}</p>
        </div>
      </Footer>
    </Container>
  )
}

export default Testimonial

const Container = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 0.5rem 1rem 1rem 1rem;
  margin: 0 1rem;
  height: 20rem;
  border: 1px solid;
  border-color: #ffffff20;
  border-radius: 12px;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .quote{
    color: #5dd8eebc;
    font-size: 3rem;
    opacity: 0.7;
  }

  .logo-company{
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    object-fit: cover;
  }
`

const Body = styled.p`
  padding: 0 auto;
  padding-bottom: 1rem;
  margin: 0 auto;
  font-size: 0.9rem;
`

const Footer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  img{
    width: 4rem;
    border-radius: 50%;
  }

  h1{
    font-size: 20px;
    padding: 0 auto;
    margin: 0 auto;
  }

  p{
    font-size: 16px;
    padding: 0 auto;
    margin: 0 auto;
  }
`
