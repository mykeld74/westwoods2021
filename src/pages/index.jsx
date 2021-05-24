import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import Modal from '../components/modal'
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
  }
`

const Redline = styled(Image)`
  width: 80%;
  max-width: 600px;
  margin: auto;
`

const Healthy = styled.div`
  h1,
  h2,
  h3,
  h4 {
    text-transform: uppercase;
  }
  .black {
    background: var(--base);
    color: var(--baseColor);
    padding: 2vw;
  }
  .red {
    background: #f00e0f;
    padding: 2vw;
    h4 {
      margin: 0 0 10px 0;
    }
  }
`

// const AlertBanner = styled.div`
//   background: #f00e0f;
//   color: #fff;
//   padding: 10px 10px 0;
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   button {
//     position: absolute;
//     right: 2vw;
//     top: 2vh;
//     background: #f00e0f;
//     color: white;
//     height: 40px;
//     width: 40px;
//     border-radius: 50%;
//     border: 2px solid #fff;
//     cursor: pointer;
//     p {
//       margin: 0;
//       padding: 0;
//       font-weight: 700;
//     }
//     @media (max-width: 400px) {
//       top: -30px;
//     }
//   }
// `
const StayHealthy = styled.div`
  width: 100%;
  background: #f00e0f;
  cursor: pointer;
  padding: 10px;
  p {
    text-align: center;
    color: #fff;
    font-size: clamp(18px, 2.5vw, 32px);
    margin: 0;
    font-weight: 600;
  }
`

const IndexPage = () => {
  const [isSafetyVisible, setIsSafetyVisible] = useState(false)
  const [isServiceSundayVisible, setIsServiceSundayVisible] = useState(true)
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
      <StayHealthy onClick={() => setIsSafetyVisible(true)}>
        <p>Click Here to learn how we are staying HEALTHY in the building!</p>
      </StayHealthy>
      <LinkSection />
      <WeAre />
      <WatchOnlineButton />
      <Modal isVisible={isSafetyVisible} setIsVisible={setIsSafetyVisible}>
        <Healthy>
          <div className="black">
            <h1 className="title">Staying Healthy At Westwoods</h1>
            <h3 className="subtitle">
              Here is what we are doing in the building to stay healthy and open
            </h3>
            <h4>Service Time</h4>
            <p>
              <strong>9:00am</strong> we are hosting our service both online and
              in-person. We would love it if you would join us.
            </p>
          </div>
          <div className="red">
            <h4>Seats</h4>
            <p>
              We have the seats spaced out for physical distancing, please leave
              2 chairs between your party and another party.
            </p>
            <h4>Masks</h4>
            <p>
              On Sunday, May 23, we will transition to a mask optional space in
              accordance with the recent CDC, State and Jefferson County
              guidelines.
            </p>
          </div>
        </Healthy>
        {/* <WestwoodsHealthy
          fluid={data.WestwoodsHealthy.localFile.childImageSharp.fluid}
        /> */}
      </Modal>
      <Modal
        isVisible={isServiceSundayVisible}
        setIsVisible={setIsServiceSundayVisible}
      >
        <Healthy>
          <div className="black">
            <Image fluid={data.soc.childCloudinaryAsset.fluid} />
            <h1 className="title">Sunday, May 30th is Serve our City Sunday</h1>
            <p>
              We won't be having a traditional service this day, but will
              instead take the opportunity to do service projects in our
              community. We will have several opportunities available at the
              church beginning at 9:00am, but if you are unable to make it we
              encourage you to take the opportunity in your neighborhood to do a
              service project.
            </p>
          </div>
        </Healthy>
        {/* <WestwoodsHealthy
          fluid={data.WestwoodsHealthy.localFile.childImageSharp.fluid}
        /> */}
      </Modal>
    </Layout>
  )
}

export default IndexPage
