import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import McBlock from '../components/mcBlock'

const StyledImg = styled(Img)`
  width: calc(100% - 20px);
  max-width: 600px;
  margin: 20px auto;
`
const StyledBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`
const StyledBgImg = styled(Img)`
  width: 100%;
  height: 100%;
`
const Content = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 10px;
  min-height: 55vh;
  width: calc(100% - 20px);
  max-width: 1080px;
  margin: 0 auto 30px;
  background: rgba(255, 255, 255, 0.6);
  color: #000;
  text-align: center;
`

const MCs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  grid-gap: 20px;
  margin-bottom: 30px;
`

const MC = ({ data }) => {
  return (
    <Layout pageTitle="Missional Communties">
      <StyledBg>
        <StyledBgImg fluid={data.mc.childCloudinaryAsset.fluid} />
      </StyledBg>

      <StyledImg fluid={data.mcLogo.childCloudinaryAsset.fluid} />
      <Content>
        <h1>Join a Missional Community!</h1>
        <p>
          We think that the best learning and life change occurs in a small
          groups of people doing life together and that's what our missional
          communities (MCs) are all about! Check out these communities currently
          meeting. Reach out and see when and where they are meeting next!
        </p>
        <MCs>
          <McBlock info={data.dataJson.mcs} />
        </MCs>
        <p>
          Missional Communties (MCs) are groups serving together, praying
          together and sharing life together. Each group will rotate through
          learning, serving and celebrating during each month. Cal to find out
          what this week's rotation will be and where to meet.
        </p>
      </Content>
    </Layout>
  )
}

export default MC

export const query = graphql`
  query mcQuery {
    dataJson {
      mcs {
        title
        day
        contact
        id
        location
      }
    }
    wwLogo: file(name: { eq: "wwLogo" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    mc: file(name: { eq: "mcBackground" }) {
      childCloudinaryAsset {
        fluid(maxWidth: 2200) {
          ...CloudinaryAssetFluid
        }
      }
    }
    mcLogo: file(name: { eq: "mcLogo" }) {
      childCloudinaryAsset {
        fluid(maxWidth: 2200) {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
