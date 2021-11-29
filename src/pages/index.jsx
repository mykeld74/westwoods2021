import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import LinkSection from '../components/homePageBlocks/linkSection'
import WeAre from '../components/homePageBlocks/weAreSection'
import WatchOnlineButton from '../components/watchOnlineButton'

const BGContainer = styled(BackgroundImage)`
  min-height: calc(100vh - 85px);
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  background: 50% 100% / contain no-repeat;
`

const HeroBlock = styled.div`
  height: calc(100vh - 50px);
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20vh 20px 35vh;
  color: var(--baseColor);
  div {
    width: 100%;
  }
`
const MainMessage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: var(--baseColor);
  p {
    font-size: clamp(65px, 7vw, 95px);
    font-family: 'Teko', serif;
    font-weight: 700;
    line-height: 1;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px 1px 0 #fff;
  }
`

const Redline = styled(Image)`
  width: 80%;
  max-width: 600px;
  margin: auto;
`

const NotificationBanner = styled.div`
  background: #f00e0f;
  color: #fff;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    text-align: center;
    font-size: clamp(20px, 7vw, 30px);
    font-weight: 700;
    line-height: 1.1;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-size: clamp(18px, 4vw, 26px);
    width: 200px;
    height: 40px;
    border-radius: 5px;
    font-weight: 700;
    border: 3px solid #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
      background: #f00e0f;
      color: #fff;
    }
  }
`
// const TwoServicesButton = styled.div`
//   width: 100%;
//   background: #f00e0f;
//   cursor: pointer;
//   padding: 10px;
//   p {
//     text-align: center;
//     color: #fff;
//     font-size: clamp(18px, 2.5vw, 32px);
//     margin: 0;
//     font-weight: 600;
//   }
// `

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cityBg: file(name: { eq: "cityBg" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      redline: file(name: { eq: "redline" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 450) {
            ...CloudinaryAssetFluid
          }
        }
      }
      soc: file(name: { eq: "soc" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 800) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)

  return (
    <Layout pageTitle="Home">
      <BGContainer fluid={data.cityBg.childCloudinaryAsset.fluid}>
        <HeroBlock>
          <div>
            <h1>Westwoods Community Church</h1>
            <MainMessage>
              <p>Join us in person or online!</p>
            </MainMessage>
            <Redline fluid={data.redline.childCloudinaryAsset.fluid} />
          </div>
        </HeroBlock>
      </BGContainer>
      <NotificationBanner>
        <p>
          Join us in Advent Conspiracy as we Spend Less, Give More, Love All,
          Worship Fully!
        </p>
        <a
          href="https://ac.westwoodscc.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button"
        >
          Learn More
        </a>
      </NotificationBanner>

      <LinkSection />
      <WeAre />

      <WatchOnlineButton />
    </Layout>
  )
}

export default IndexPage
