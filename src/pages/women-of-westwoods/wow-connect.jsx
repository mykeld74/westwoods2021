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
// const WowBrunch = styled.div`
//   width: 90%;
//   max-width: 650px;
//   margin: 15px auto;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//   background: #0b1230;
//   padding: 15px;
//   border-radius: 10px;
//   .wowBrunchImage {
//     width: 100%;
//   }
//   .wowBrunchText {
//     padding: 20px;
//     background: #e1332c;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     border-radius: 8px;
//   }
//   p {
//     font-size: 26px;
//     font-weight: 900;
//     color: #fff;
//   }
//   .wowBrunchTextTitle {
//     margin: 0 0 25px 0;
//   }
// `

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
      wowBrunch: file(name: { eq: "WoWBrunch" }) {
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
            <p>
              Join us Tuesday, <strong>January 18th at 6:30</strong> for our
              night of testimony. We will be carving out space for connection,
              reflection and celebration as we enter the new year.
            </p>
            <p>
              Then save the date for our next two opportunities to connect:
              <br />
              <strong>Tuesday, Feb 15th at 6:30</strong> will be game night!{' '}
              <br />
              <strong> Saturday, March 12th</strong> will be our IF: Gathering
              conference. You won't want to miss!
            </p>
          </TextContainer>
        </Container>
      </Section>
      <WowFooter />
    </Layout>
  )
}

export default WomenOfWestwoods
