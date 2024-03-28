import React from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';

interface JobDescriptionProps {
  role: string;
  company: string;
  duration: string;
  dotPoints: string[];
}

const RoleHeading = styled.h3`
  padding: 0;
  margin: 0;
`;

const Subheading = styled.h4`
  padding: 0;
  margin-top: 0;
  margin-bottom: 0.25rem;
  `

export const JobDescription: React.FC<JobDescriptionProps> = ({ role, company, duration, dotPoints }) => {
  return (
    <Box sx={{ textAlign: 'left' }}>
      <RoleHeading>{role}</RoleHeading>
      <Subheading>{company}, {duration}</Subheading>
      <ul>
        {dotPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </Box>
  );
}

export default JobDescription;
