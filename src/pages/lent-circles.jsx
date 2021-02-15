import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from '../components/container'
import StyledLink from '../components/styledLink'

const StyledImg = styled(Img)`
  width: 100%;
`

const Content = styled.div`
  padding: 3vh 0;
  min-height: 55vh;
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
      lentCircles: file(name: { eq: "lentCirclesBanner" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 2200) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageTitle="Lent Circles">
      <StyledImg fluid={data.lentCircles.childCloudinaryAsset.fluid} />

      <Container>
        <Content>
          <p>
            Westwoods Missional Communities are groups of people on mission
            together to grow closer in relationships, closer to Jesus and serve
            the community around them.  We are currently on pause with our
            Missional Communities, however, we are launching Lent Circles which
            are smaller groups of people studying through the Lenten Season
            together either in person (in a safe environment) or online.  If you
            would like more information on joining a Lent Circle, please fill
            out this form:
            <StyledLink
              href="https://docs.google.com/forms/d/e/1FAIpQLSdFs9oIgw8lbHTkL3rNnhywe8RvqB6Iku4UE5dZ6ePZEZ_qEg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lent Circles Form
            </StyledLink>
          </p>
        </Content>
      </Container>
    </Layout>
  )
}

export default CurrentSeries
