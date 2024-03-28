import { SectionHeader } from "../../common/SectionHeading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import TestimonialSlider from "./TestimonialSlider";
import OptusLogo from '../../assets/OptusLogo.png';
import Seb from '../../assets/Seb-Southern.jpeg';
import Frank from '../../assets/Frank-L.jpeg';
import Lucas from '../../assets/Lucas-photo.jpeg';
import PlaceholderUser from '../../assets/user-placeholder.jpeg'

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 0;
  text-align: left;

  h2{
    font-weight: 700;
    font-size: 1.5rem;
    color: #5dd8eebc;
    font-family: 'Poppins';
    padding-bottom: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 0;
  }

  h1{
    padding: 0;
    margin: 0;
  }

`

export function Testimonials() {
  return (
    <Container>
      <h2>Testimonials</h2>
      <SectionHeader plain="From Former" coloured="Colleagues" />
      <TestimonialSlider data={testimonialData} />
    </Container>

  )
}

export interface ITestimonial {
  name: string;
  description: string;
  image: string;
  role: string;
  company: string;
  linkedInUrl: string;
}

const testimonialData: ITestimonial[] = [
  {
    name: 'Sebastian Southern',
    description: `I have the pleasure of working alongside Lachlan during his tenure at Optus. As a Junior Software Engineer,
    Lachlan showcases an exemplary ability to swiftly grasp and implement new concepts within our fast-paced environment.
    His dedication to continuous learning and adaptability greatly contributes to the success of his team.
    Moreover, Lachlan's friendly nature and strong interpersonal skills foster a positive team dynamic, earning him the respect of his
    colleagues. His valuable contributions undoubtedly make him a strong asset to the company.`,
    image: Seb,
    role: 'Staff Engineer',
    company: OptusLogo,
    linkedInUrl: 'https://www.linkedin.com/in/sebastian-southern-50b544126/'
  },
  {
    name: 'Frank Liardet',
    description: `I've been working in the same team as Lachlan at Optus for the past 9 months.
    I've never seen a developer learn as fast as he does.As full stack devs at a big telco we work
     across a broad range of technologies including a significant amount of DevOps, and Lachy
    has been able to not only keep up, but also make a strong contribution to our team.`,
    image: Frank,
    role: 'Senior Software Engineer',
    company: OptusLogo,
    linkedInUrl: 'https://www.linkedin.com/in/frank-liardet/'
  },
  {
    name: 'Joshua Wu',
    description: `Lachlan joined my team 9 months ago as an enthusiastic full-stack developer. While
    he is new to software development, he can pick up newconcepts and technologies at a fast pace to
    keep up with our delivery cycle. In addition, he is also a team player with excellent communication
    skills, making working with him very easy and pleasant. He will be a great addition to any organizations
    and teams he joins.`,
    image: PlaceholderUser,
    role: 'Tech Lead',
    company: OptusLogo,
    linkedInUrl: 'https://www.linkedin.com/in/joshua-wu-17aa7615a/'
  },
  {
    name: 'Lucas Hahn',
    description: `Lachlan Bennetts is a fantastic software engineer both in his knowledge of the software
    development fundamentals and productlifecycle, but also in his down to earth attitude and willingness to
    continuously learn and better himself. It was an absolutepleasure to be able to work alongside Lachlan in
    which we worked closely solving complex tasks for features inside the My Optus App as well as identifying
    key focus areas that consistently maximised value to the business. Lachlan is a team player through and
    through, able to seamlessly gel inside any squad or work environment with his fun and friendly demeanour and
    strong sense of cooperation.`,
    image: Lucas,
    role: 'Software Engineer',
    company: OptusLogo,
    linkedInUrl: 'https://www.linkedin.com/in/lucash-syd/'
  }
]
