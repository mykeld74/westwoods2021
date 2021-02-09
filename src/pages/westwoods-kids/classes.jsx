import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Section from '../../components/section'
import Container from '../../components/container'
import KidsFooter from '../../components/kidsFooter'
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
    &.left {
      text-align: left;
    }
  }
`

const WestwoodsKids = () => {
  const data = useStaticQuery(graphql`
    query {
      wwKidsBanner: file(name: { eq: "westwoodsKidsBanner" }) {
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
      <SEO title="Westwoods Kids Classes" />
      <Img fluid={data.wwKidsBanner.childCloudinaryAsset.fluid} />

      <Section>
        <Container>
          <TextContainer>
            <h1>The Westwoods Kids Classes:</h1>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#42639E" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>We have 4 classes available:</h2>
            <p>Babies</p>
            <p>Toddlers</p>
            <p>Littles (PreK-Kindergarten)</p>
            <p>Bigs (Elementary)</p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#540C35" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>We Believe</h2>
            <p className="left">
              We believe real life change happens in relationships and our
              classes are set up to foster peer to peer friendships and
              volunteer connection for children to be known and connected.
            </p>

            <p className="left">
              In this COVID time we will have all our volunteers wearing masks
              and each classroom will have two adult volunteers excited and
              ready to welcome the children each Sunday.
            </p>

            <p className="left">
              We will be monitoring the classroom sizes and if we begin to have
              more than 8 kiddos in a room we will be multiplying to have more
              classrooms available for those age groups.
            </p>
          </TextContainer>
        </Container>
      </Section>

      <KidsFooter />
    </Layout>
  )
}

export default WestwoodsKids
