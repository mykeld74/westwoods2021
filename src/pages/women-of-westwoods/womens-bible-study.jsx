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
  padding: 3vw 0 20vw;
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
    <Layout pageTitle="WoW Bible Study">
      <div style={{ width: '100vw', padding: '3vh 5vw' }}>
        <ImgContainer>
          <Img fluid={data.wowLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
      </div>
      <Section>
        <Container>
          <TextContainer className="left">
            <h3>We currently do not have a Women's Bible Study scheduled.</h3>

            <p>
              If you would like to learn more about any of our programs, be
              alerted when we schedule a bible study or have any questions,
              please email us at:
              <a href="mailto:womenofwestwoods@gmail.com">
                womenofwestwoods@gmail.com
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
