import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import HeroBanner from '../../components/heroBanner'
// import ContentBlock from '../components/contentBlock'

import InfoBlock from '../../components/infoBlock'
// import RentalFooter from "../components/rentalFooter"

const ImgContainer = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 20px 0;
`
const StyledImg = styled(Img)`
  width: 100%;
`
const ContentBlock = styled.div`
  width: 100%;
`

const RoomPage = ({ data }) => (
  <Layout>
    <SEO title="Facility Rentals" />
    <HeroBanner>
      <ImgContainer>
        <StyledImg fluid={data.wwLogo.childCloudinaryAsset.fluid} />
      </ImgContainer>
      <h1>Facility Rentals</h1>
    </HeroBanner>

    <ContentBlock>
      <InfoBlock info={data.dataJson.opportunities} />
    </ContentBlock>
    {/* <RentalFooter /> */}
  </Layout>
)

export default RoomPage

export const query = graphql`
  query roomQuery {
    dataJson {
      opportunities {
        desc
        time
        title
      }
    }
    wwLogo: file(name: { eq: "wwLogo" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
