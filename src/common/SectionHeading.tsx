import React from 'react';
import styled from 'styled-components';

interface SectionHeaderProps {
  plain?: string;
  coloured?: string
}


export const SectionHeader: React.FC<SectionHeaderProps> = ({plain, coloured}) => {
  const SectionHeading = styled.h1`
    font-size: 1.9rem;
    font-family: 'Poppins';
    color: #e5ebecbb;
    font-weight: 700;
    padding-top: 16px;
    margin-bottom: 0;

    .blue {
      color: #5dd8eebc;
    }
  `;


  return (
      <SectionHeading>{plain}<span className='blue'> {coloured}</span></SectionHeading>
  );
};
