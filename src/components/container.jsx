import React from 'react'
import styled from 'styled-components'

const OuterContainer = styled.div`
  width: calc(100% - 30px);
  max-width: 1160px;
  margin: auto;
`

const Container = ({ children }) => <OuterContainer>{children}</OuterContainer>

export default Container
