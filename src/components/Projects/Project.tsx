import React from 'react'
import styled from 'styled-components'
import { IProject } from './Projects'

interface ProjectProps {
  data: IProject
}

const Project: React.FC<ProjectProps> = ({data}) => {
  return (
    <Container className='project'>
      <img src={data.image} alt='Image Here' />
      <div className='info'>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </Container>
  )
}

export default Project

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  .info{
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
    transition: all 0.5s ease-in-out;

    h1 {
      font-size: 1rem;
    }

    p{
      width: 90%;
      font-size: 0.8rem;
    }
  }

  &:hover > img{
    transform: scale(1.3);
  }

  &:hover > .info {
    bottom: 0;
  }

`
