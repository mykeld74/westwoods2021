import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Section from '../../components/section'
import Container from '../../components/container'

const TextContainer = styled.div`
  text-align: center;
  padding: 3vw 0;
  h1,
  h2,
  h3 {
    margin: 0;
  }
  p {
    margin: 2vh 0 0;
  }
`
const StyledH1 = styled.h1`
  text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
`

const WestwoodsKids = () => {
  const data = useStaticQuery(graphql`
    query {
      collegeMinistry: file(name: { eq: "collegeMinistry" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 2200) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="College Ministry" />
      <BackgroundImage fluid={data.collegeMinistry.childCloudinaryAsset.fluid}>
        <div
          style={{
            height: '30vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
          }}
        >
          <StyledH1>College Ministry</StyledH1>
        </div>
      </BackgroundImage>
      <Section backgroundColor="#000" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Getting Started...</h2>
            <p>
              Grow in Your relationship with God and Others each week by jumping
              into a Missional Community!
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#333333" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Make a Difference</h2>
            <p>
              We have various ministry opportunities available for all levels of
              commitment and interests: running sound, watching kids, leading
              small groups, graphic design etc. We want to match you with the
              perfect opportunity so you can make a big difference!
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#777" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Connect with a Family</h2>
            <p>
              We know many of you are far from home and so we want to connect
              you with a local family to call your own! If you are missing home
              cooked meals and nights hanging with a family, contact us at
              WestwoodsHome@msn.com and get yourself adopted!
            </p>
          </TextContainer>
        </Container>
      </Section>
    </Layout>
  )
}

export default WestwoodsKids
