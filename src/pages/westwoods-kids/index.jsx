import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
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
  }
`

const WestwoodsKids = () => {
  const data = useStaticQuery(graphql`
    query {
      wwKids: file(name: { eq: "wwKidsBanner" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 2200) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageTitle="Westwoods Kids">
      <div style={{ width: '100vw', padding: '3vh 5vw' }}>
        <Img fluid={data.wwKids.childCloudinaryAsset.fluid} />
      </div>
      <Section>
        <Container>
          <TextContainer>
            <h1>Welcome to Westwoods Kids</h1>
            <p>
              Transforming our Next Generation with the Love of Jesus One Friend
              at a Time
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#42639E" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Westwoods Kids core values are:</h2>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#540C35" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>We will know and love your child well.</h2>
            <p>
              Our amazing volunteers will provide a safe and exciting place for
              kids to learn and have fun. Please let us know if you have any
              concerns that will help us serve your family best.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#4CB3D1" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>We will teach your child about the love of Jesus.</h2>
            <p>
              We want kids to leave each Sunday learning something new about
              Jesus’ amazing love for them.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#C21F48" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>We will value your child’s safety.</h2>
            <p>
              When you check in, you’ll receive a security tag to bring with you
              to pick up your child. If we need to contact you during service,
              we’ll text you at the number you provide.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <KidsFooter />
    </Layout>
  )
}

export default WestwoodsKids
