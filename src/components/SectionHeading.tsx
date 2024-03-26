import React from 'react';
import styled from 'styled-components';

interface SectionHeaderProps {
  text: string;
}


export const SectionHeader: React.FC<SectionHeaderProps> = ({text}) => {
  const SectionHeading = styled.h2`
    font-size: 40px;
    font-family: 'Poppins';
    color: #222;
    font-weight: 700;
    position: relative;
    display: inline-block;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -23px;
      width: 10px;
      height: 10px;
      border-radius: 7px;
      background-color: red;
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -20px;
      width: 100%;
      height: 3px;
      background-color: blue;
    }
  `;

  const HeadingWrapper = styled.div`
    text-align: left;
    margin-bottom: 30px;
  `;
  return (
    <HeadingWrapper>
      <SectionHeading>{text}</SectionHeading>
    </HeadingWrapper>
  );
};
