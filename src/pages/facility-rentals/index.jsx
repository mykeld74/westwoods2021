import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import HeroBanner from '../../components/heroBanner'
import Container from '../../components/container'
import RoomBlock from '../../components/roomBlock'
import RentalFooter from '../../components/rentalFooter'

const RoomPage = ({ data }) => (
  <Layout pageTitle="Facility Rentals">
    <HeroBanner
      backgroundImage={data.auditoriumBanner.childCloudinaryAsset.fluid}
    >
      <h1
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
        }}
      >
        Facility Rentals
      </h1>
    </HeroBanner>

    <Container>
      <RoomBlock room={data.dataJson.facilities} />
    </Container>
    <RentalFooter />
  </Layout>
)

export default RoomPage

export const query = graphql`
  query roomQuery {
    dataJson {
      facilities {
        features
        id
        room
      }
    }
    auditoriumBanner: file(name: { eq: "auditoriumBanner" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
