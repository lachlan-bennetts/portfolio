import { Box } from "@mui/system"


interface JobDescriptionProps  {
  role: string,
  company: string,
  duration: string,
  dotPoints: string[]
}

export const JobDescription: React.FC<JobDescriptionProps> = ({role, company, duration, dotPoints}) => {
  return (
  <Box>
    <h5>{role}</h5>
    <h6>{company}, {duration}</h6>
    <ul>
      {dotPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </Box>
  )
}
