import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import Section from '../../components/section'
import Container from '../../components/container'
import WowFooter from '../../components/wowFooter'

const TextContainer = styled.div`
  text-align: center;
  padding: 3vw 0 5vw;

  h1,
  h2,
  h3 {
    margin: 0;
  }
  p {
    margin: 2vh 0 0;
    line-height: 1.3;
  }
  &.left {
    text-align: left;
  }
  ul {
    margin: 20px 0 20px 50px;
  }
`

const ImgContainer = styled.div`
  width: calc(100% - 30px);
  max-width: 250px;
  margin: auto;
`

const WomenOfWestwoods = () => {
  const data = useStaticQuery(graphql`
    query {
      wowLogo: file(name: { eq: "wowLogoNew" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 600) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageTitle="Women of Westwoods">
      <div style={{ width: '100vw', padding: '3vh 5vw', background: '#fff' }}>
        <ImgContainer>
          <Img fluid={data.wowLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
      </div>
      <Section>
        <Container>
          <TextContainer className="left">
            <h3>WoW Connect</h3>
            <h4>
              Because supportive social relationships are essential to human
              thriving!{' '}
            </h4>
            <p>
              Once a month we will create a space to gather as women to build
              community around a different topic. All gatherings will be held at
              Westwoods Community Church. Upcoming dates are:
            </p>
            <ul>
              <li>Tuesday - 11/16 at 6:30 PM</li>
              <li>Saturday - 12/11 at 10:00 AM</li>
              <li>Tuesday - 1/18 at 6:30 PM</li>
            </ul>
            <p>
              November Connect on 11/16 we will focus on Gratitude! What's in
              our life that we often take for granted? How can we appreciate
              what have?
            </p>
            <p>Why does being thankful help?</p>
            <p>Join us for a fun, encouraging evening, and bring a friend!</p>

            <p>
              Tuesday, November 16th.
              <br />
              6:30 -8:00 PM
              <br />
              Westwoods Coffee Shop
              <br />
              Childcare will not be available but we are hopeful with advance
              notice we can help everyone find a way to come. Please reach out
              if you need assistance.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <WowFooter />
    </Layout>
  )
}

export default WomenOfWestwoods
