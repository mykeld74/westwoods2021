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

const CurrentSeriesVideo = styled.div`
  box-sizing: border-box;
  position: relative;
  .videoContainer {
    width: 100%;
    aspect-ratio: 16/9;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const PlayListId = 'PLzIu1DkkWpWyG4hhL1sd4AATT9qiNxDEx'

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
      currentSeriesLogo: file(name: { eq: "Mark_WIJR" }) {
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
            <h3>Who is Jesus Really</h3>
            <h4>1.2 - Mark 1</h4>
            <h4>1.9 - Mark 2</h4>
            <h4>1.16 - Mark 3</h4>
            <h4>1.24 - Mark 4</h4>
            <h4>1.30 - Mark 5</h4>
            <h4>2.6 - Mark 6</h4>
            <h4>2.13 - Mark 7</h4>
          </div>
          <p>Watch the current series here:</p>
          <CurrentSeriesVideo>
            <div className="videoContainer">
              <iframe
                src={`https://www.youtube.com/embed/videoseries?list=${PlayListId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </CurrentSeriesVideo>
        </Content>
      </Container>
    </Layout>
  )
}

export default CurrentSeries
