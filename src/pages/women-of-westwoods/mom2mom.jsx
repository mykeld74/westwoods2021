import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Section from '../../components/section'
import Container from '../../components/container'
import WowFooter from '../../components/wowFooter'

const TextContainer = styled.div`
  text-align: center;
  padding: 3vw 0 18vw;
  h1,
  h2,
  h3 {
    margin: 0;
  }
  p {
    margin: 2vh 0 0;
  }
  &.left {
    text-align: left;
  }
`

const ImgContainer = styled.div`
  width: calc(100% - 30px);
  max-width: 400px;
  margin: auto;
`

const WomenOfWestwoods = () => {
  const data = useStaticQuery(graphql`
    query {
      m2mLogo: file(name: { eq: "m2mLogo" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 400) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Women of Westwoods" />
      <div style={{ width: '100vw', padding: '3vh 5vw' }}>
        <ImgContainer>
          <Img fluid={data.m2mLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
      </div>
      <Section>
        <Container>
          <TextContainer className="left">
            <p>
              Due to uncertainties with the school year and how our program is
              very dependent on older kids being in school, we very much regret
              that we have no plans to have an in-person program this year. We
              will update this page if anything changes, and we hope you still
              can find some sweet connection this year on a smaller scale. We
              will miss having our group together and all of the wonderful
              chances for relationship. Much love to all of you!
            </p>
          </TextContainer>
        </Container>
      </Section>
      <WowFooter />
    </Layout>
  )
}

export default WomenOfWestwoods
