import React from 'react'
import styled from 'styled-components/native'

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>TEST</TitleWrapper>
    </HeaderWrapper>
  )
}
export default Header

const HeaderWrapper = styled.View`
  width: 100%;
  height: 50px;
  background-color: rgb(124, 144, 255);
  display: flex;
  justify-content: center;
  padding: 16px;
`
const TitleWrapper = styled.Text`
  font-weight: normal;
  font-size: 1.5rem;
  text-align: start;
`
