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
    margin: 0 0 20px;
  }
  p {
    margin: 2vh 0 0;
    line-height: 1.3;
  }
  &.left {
    text-align: left;
  }
  ul {
    margin: 20px 0 20px 50px;
    &.left {
      text-align: left;
      margin-left: 10vw;
    }
  }
`

const ImgContainer = styled.div`
  width: calc(100% - 30px);
  max-width: 250px;
  margin: auto;
`

const WomenOfWestwoods = () => {
  const data = useStaticQuery(graphql`
    query {
      wowLogo: file(name: { eq: "wowLogoNew" }) {
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
          <TextContainer>
            <h2>Meet Us at the Park!</h2>
            <h3>
              A playground playdate for parents and caretakers of littles to
              connect. Invite your friends!
            </h3>
            <h3>
              Every 2ND and 4TH Wednesday <br />
              <span>Weather Permitting</span>
            </h3>

            <ul className="left">
              <li>10/13 -- Lakewood Park</li>
              <li>
                10/27 -- Front Porch Coffee (playground on the north side of the
                church)
              </li>
              <li>11/10 -- Carmody</li>
              <li>12/8 -- Front Porch Coffee</li>
            </ul>

            <p>
              Park outings are from 9:30-11:00 and are lead by Sarah Brooks. For
              more information, text her at 970-260-5331.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <WowFooter />
    </Layout>
  )
}

export default WomenOfWestwoods
