import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import Section from '../../components/section'
import Container from '../../components/container'
import WowFooter from '../../components/wowFooter'

const TextContainer = styled.div`
  text-align: center;
  padding: 3vw 0 5vw;

  h1,
  h2,
  h3 {
    margin: 0;
  }
  p,
  h4 {
    margin: 2vh 0 0;
    line-height: 1.3;
  }
  &.left {
    text-align: left;
  }
  ul {
    margin: 20px 0 20px 50px;
  }
`

const ImgContainer = styled.div`
  width: calc(100% - 30px);
  max-width: 550px;
  margin: auto;
`

const WomenOfWestwoods = () => {
  const data = useStaticQuery(graphql`
    query {
      wowLogo: file(name: { eq: "wowLogo" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 600) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <Layout pageTitle="Women of Westwoods">
      <div style={{ width: '100vw', padding: '3vh 5vw', background: '#fff' }}>
        <ImgContainer>
          <Img fluid={data.wowLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
      </div>
      <Section>
        <Container>
          <TextContainer className="left">
            <h3>Free Fitness Classes Available Every Week!</h3>

            <p>
              <strong>REFIT:</strong> A dance fitness format for everybody and
              every BODY.
            </p>
            <p>
              <strong>RevFit:</strong> A faith-infused drumstick class full of
              fun and freedom! Bring your own drumsticks if you have them!
            </p>
            <p>
              <strong>REV+FLOW:</strong> A low impact, high intensity format to
              help make everyday tasks easier. Bring light weights and a mat if
              you have them!
            </p>

            <h4>
              There is something for eveyone. Bring a friend and Let's Move
              Together!
            </h4>

            <h4>Schedule:</h4>
            <p>
              <strong>SATURDAYS:</strong>
              <br />
              8:00-9:00 AM - REFIT
              <br />
              9:00-10:00 AM - RevFit
            </p>

            <p>
              <strong>TUESDAYS:</strong>
              <br />
              5:30-6:30 PM - REV+FLOW
            </p>

            <p>
              Have more questions? Ask Kirsten Taylor at{' '}
              <a href="mailto:denvertaylor13@gmail.com">
                denvertaylor13@gmail.com
              </a>
            </p>
          </TextContainer>
        </Container>
      </Section>
      <WowFooter />
    </Layout>
  )
}

export default WomenOfWestwoods
