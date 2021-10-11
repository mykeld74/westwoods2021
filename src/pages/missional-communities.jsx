import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import Container from '../components/container'

const StyledImg = styled(Img)`
  width: 100%;

  margin: 0 auto;
`

const Content = styled.div`
  padding: 3vh 0;
  min-height: 55vh;
`

const MC = () => {
  const data = useStaticQuery(graphql`
    query {
      wwLogo: file(name: { eq: "wwLogo" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      mc: file(name: { eq: "mc" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 2200) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageTitle="Missional Communties">
      <StyledImg fluid={data.mc.childCloudinaryAsset.fluid} />

      <Container>
        <Content>
          <p>
            We are encouraging everyone to make a concerted effort to join an MC
            for the next four weeks as we dive in the new Season of the Soul
            series.  We think that the best learning and life change occurs in
            small groups of people doing life together and that’s what our
            missional communities (MCs) are all about! Connect with us to see
            what would work best by emailing{' '}
            <a href="mailto:joe@westwoodscc.org">Joe@westwoodscc.org</a>.
          </p>
        </Content>
      </Container>
    </Layout>
  )
}

export default MC
