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
      currentSeriesLogo: file(name: { eq: "BecauseHeLives" }) {
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
          <h2>9:00am - Live in person and online</h2>
          <StyledImg
            fluid={data.currentSeriesLogo.childCloudinaryAsset.fluid}
          />
          <div className="topics">
            <p>
              <strong>4.11</strong> - Because Jesus Lives, I LIVE
            </p>
            <p>
              <strong>4.18</strong> - Because Jesus Lives, I Have Hope
            </p>
            <p>
              <strong>4.25</strong> - Because Jesus Lives, I Have Joy
            </p>
            <p>
              <strong>5.2</strong> - Because Jesus Lives, I Have Purpose
            </p>
          </div>
        </Content>
      </Container>
    </Layout>
  )
}

export default CurrentSeries
