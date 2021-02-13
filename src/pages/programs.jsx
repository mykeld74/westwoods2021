import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroBanner from '../components/heroBanner'
import Container from '../components/container'
import ProgramList from '../components/programList'

const ImgContainer = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 20px 0;
`
const StyledImg = styled(Img)`
  width: 100%;
`
const ProgramPage = ({ data }) => (
  <Layout>
    <SEO title="Programs" />
    <HeroBanner>
      <ImgContainer>
        <StyledImg fluid={data.wwLogo.childCloudinaryAsset.fluid} />
      </ImgContainer>
      <h1>Programs</h1>
    </HeroBanner>

    <Container>
      <h3 style={{ marginTop: 20 }}>Get the programs for this series here!</h3>
      <div style={{ minHeight: '40vh' }}>
        <ProgramList />
      </div>
    </Container>
  </Layout>
)

export default ProgramPage

export const query = graphql`
  query ProgramQuery {
    wwLogo: file(name: { eq: "wwLogo" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`
