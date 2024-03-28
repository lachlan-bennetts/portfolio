import { Box } from '@mui/material'
import './App.css'
import AboutMe from './components/AboutMe'
import ResponsiveAppBar from './components/AppBar'
import { JobHistory } from './components/JobHistory/JobHistory'
import Projects from './components/Projects/Projects'
import { GradientBackground } from './common/Gradient'
import { Testimonials } from './components/Testimonials/Testimonials'

function App() {

  return (
    <>
      <ResponsiveAppBar />
        <JobHistory />
        <GradientBackground>
          <Projects />
          <Testimonials />
        </GradientBackground>
    </>
  )
}

export default App
