import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  color: rgb(160, 159, 159);
  text-align: center;
`;

const Header = ({ text }) => {
  return (
    <H1>
      {text}
    </H1>
  )
}

export default Header
