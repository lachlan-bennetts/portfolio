import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from '../../common/SectionHeading'
import { Slide } from './style'
import { ProjectSlider } from './ProjectSlider'
import SpooniesImage from '../../assets/Spoonies.jpg'
import ZoomiesImage from '../../assets/Zoomies_Logo.jpg'
import GithubImage from "../../assets/Github_icon.webp"
import OptusPulseImage from '../../assets/Optus-Pulse.webp'

const Projects = () => {
  return (
    <Container>
      <SectionHeader plain='Key' coloured='Projects' />
      <p>
        These are some key projects that I've taken part in either by myself or as part of a bigger team.
        I've learnt a lot during these different projects and plan to complete many more in the very near
        future!
      </p>
      <Slide>
        <ProjectSlider projects={projectData} />
      </Slide>
    </Container>
  )
}

export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

const projectData: IProject[] = [
  {
    title: 'Zoomies',
    description: `This was a tinder clone disguised as a dog app that I created at LeWagon Bootcamp using Ruby on Rails and Javascript.`,
    image: ZoomiesImage,
    link: ''
  },
  {
    title: 'Optus Pulse',
    description: `I'm really proud of my work with Optus Pulse.
    With 300K+ daily users my code had a wide base it was being used by.
    I implemented features such as Network Pin and New Tower functionality`,
    image: OptusPulseImage,
    link: ''
  },
  {
    title: 'Banking application',
    description: `Personal finance app to track and graph incoming
    and outgoing payments to better the user's relationship with money.
    Uses nx, TS, TypeORM... WIP`,
    image: GithubImage,
    link: ''
  },
  {
    title: 'AirBnb Knockoff',
    description: 'Created early on in my coding career this app mainly utilises RubyOnRails.',
    image: SpooniesImage,
    link: ''
  },
]

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;

  p{
    width: 36rem;
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
  }
`

export default Projects
