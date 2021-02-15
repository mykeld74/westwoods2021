import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Container from '../components/container'

import InfoBlock from '../components/infoBlock'
// import RentalFooter from "../components/rentalFooter"

const ImgContainer = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 20px 0;
`
const StyledImg = styled(Img)`
  width: 100%;
`
const VolunteerPage = ({ data }) => (
  <Layout pageTitle="Volunteer Opportunities">
    <HeroBanner>
      <ImgContainer>
        <StyledImg fluid={data.wwLogo.childCloudinaryAsset.fluid} />
      </ImgContainer>
      <h1>Volunteer Opportunities</h1>
    </HeroBanner>

    <Container>
      <h3 style={{ marginTop: 20 }}>
        To learn more about any of these opportunities please contact us!
      </h3>
      <InfoBlock info={data.dataJson.opportunities} />
    </Container>
  </Layout>
)

export default VolunteerPage

export const query = graphql`
  query volunteerQuery {
    dataJson {
      opportunities {
        desc
        time
        title
        id
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
