import { Box } from '@mui/material'
import './App.css'
import AboutMe from './components/AboutMe'
import ResponsiveAppBar from './components/AppBar'
import { JobHistory } from './components/JobHistory'

function App() {

  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <JobHistory />
      </Box>
    </>
  )
}

export default App
