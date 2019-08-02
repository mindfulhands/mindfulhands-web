import React from 'react'
import styled from 'styled-components'

const H5 = styled.h5`
  color: rgb(160, 159, 159);
  text-align: center;
  margin-top: -25px;
`;

const SubHeader = ({ text }) => {
  return (
    <H5>
      {text}
    </H5>
  )
}

export default SubHeader
