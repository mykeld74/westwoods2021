import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Container from '../components/container'

const ImgContainer = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 20px 0;
`
const StyledImg = styled(Img)`
  width: 100%;
`

const Content = styled.div`
  padding: 3vh 0;
  .topics {
    margin-top: 3vh;
    p {
      margin-bottom: 0.5em;
      padding: 0;
    }
  }
`

const CurrentSeries = () => {
  const data = useStaticQuery(graphql`
    query {
      wwLogo: file(name: { eq: "wwLogo" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      currentSeriesLogo: file(name: { eq: "ac" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageTitle="Current Series">
      <HeroBanner>
        <ImgContainer>
          <StyledImg fluid={data.wwLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
        <h1>Current Series</h1>
      </HeroBanner>
      <Container>
        <Content>
          <h1>Join us Sunday mornings!</h1>
          <h2>9:00am - 10:30am Live in person and online</h2>
          <StyledImg
            fluid={data.currentSeriesLogo.childCloudinaryAsset.fluid}
          />
          <div className="topics">
            <h3>Advent Conspiracy</h3>
            <h4>Spend Less, Give More, Love All, Worship Fully!</h4>
          </div>
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLzIu1DkkWpWzDcmCyfkP1JsDEXB92Akeu"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="currentSeriesPlaylist"
          ></iframe> */}
        </Content>
      </Container>
    </Layout>
  )
}

export default CurrentSeries
