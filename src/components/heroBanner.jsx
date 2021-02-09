import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledBG = styled(BackgroundImage)`
  width: 100%;
  height: 30vh;
`

const Banner = styled.div`
  min-height: 30vh;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const HeroBanner = ({ backgroundImage, children }) => (
  <>
    {backgroundImage ? (
      <Banner>
        <StyledBG fluid={backgroundImage}>{children}</StyledBG>
      </Banner>
    ) : (
      <Banner>{children}</Banner>
    )}
  </>
)

export default HeroBanner
