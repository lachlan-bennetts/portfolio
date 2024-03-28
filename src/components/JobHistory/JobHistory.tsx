import Box from '@mui/material/Box';
import { SectionHeader } from '../../common/SectionHeading';
import { JobDescription } from './JobDescription';
import styled from 'styled-components'


export function JobHistory() {

  interface JobInfo {
    role: string;
    company: string;
    duration: string;
    achievements: string[]
  }

  const optus = {
    role: "Product Engineer",
    company: 'Optus',
    duration: 'June 2023 - Present',
    achievements: [
    'Created fast and strong bonds with coworkers, allowing for a more enjoyable experience in the office.',
    'Instrumental in optimising the acclaimed Optus Pulse application within the MyOptusApp, bringing the code up to specifications, and pioneering new features such as network pin and tower activation.',
    'Played an integral role in the ongoing integration and deployment of code through CI/CD pipelines, serving as the primary liaison for DevOps-related matters and troubleshooting alongside the DevOps Team.',
    'Essential in updating Optus Pulse’s dependencies up to scratch after 3 years of no dependency updates.',
    'Proactively addressed tech debt outside of working hours, showcasing an unwavering dedication as I audaciously unraveled intertwined cron applications and diligently rectified minor UI discrepancies noticed in production.'
    ]
  }

  const pittwater = {
    role: 'Bartender',
    company: 'Pittwater RSL',
    duration: 'Jan 2023 - Jun 2023',
    achievements: [
      `I worked as a bartender during the period between finishing my coding course and beginning work at Optus.
      When not working I would partake in small projects such as creating a working calendar and a chess game as
      a way to learn more.`
    ]
  }

  const als = {
    role: 'Analytical Laboratory Technician',
    company: 'ALS Global',
    duration: 'Sep 2021 - Sep 2022',
    achievements: [
      'Conquered the daily management of a team of five, achieving an impressive production of over 150 pharmaceutical samples for testing.',
      'Optimised time management skills to efficiently solo-produce over 50 samples a day, while executing core machine component replacements and calibration procedures.'
    ]
  }

  const cwh = {
    role: 'Pharmacy Assistant',
    company: 'Chemist Warehouse',
    duration: 'Sep 2020 - Nov 2021',
    achievements: [
      'Excelled at a leadership role, effectively training, coaching and scheduling employees.',
      'Excelled at technical and non-technical communication with key stakeholders and customers.'
    ]
  }

  const cruiseBar = {
    role: 'Bartender & All-Rounder',
    company: 'Cruise Bar',
    duration: 'Sep 2019 - April 2020',
    achievements: [
      `Leveraged exceptional organisational and multitasking skills to effectively juggle
      simultaneous customer, team, and business demands while preventing any delays or errors.`,
    ]
  }

  const realEstate = {
    role: 'Real Estate Agent',
    company: 'JPB Real Estate',
    duration: 'Nov 2016 - Sep 2019',
    achievements: [
      `Fostered ongoing communication with critical on- and off-site tenant contacts to guarantee their contentment with facility and services`,
      `Spearheaded the construction and upkeep of exhaustive property lists across diverse websites to effectively promote properties while maintaining readability.`
    ]
  }

  const jobHistory = (jobs: JobInfo[]) => {
    return (
      <>
        {jobs.map((job, index) => {
          return <JobDescription role={job.role} company={job.company} duration={job.duration} dotPoints={job.achievements} key={index}/>
        })}
      </>
    )
  }

  return(
    <Container>
      <SectionHeader plain='My Work History' />
      <div className='history-card'>
        {jobHistory([optus, als, cwh, realEstate])}
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: auto;
`
