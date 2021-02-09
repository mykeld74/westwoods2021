import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Modal from '../components/modal'
import LinkSection from '../components/homePageBlocks/linkSection'
import WeAre from '../components/homePageBlocks/weAreSection'

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
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20vh 20px 35vh;

  div {
    width: 100%;
  }
`
const MainMessage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
    background: #000;
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
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
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
      <Modal isVisible={isSafetyVisible} setIsVisible={setIsSafetyVisible}>
        <Healthy>
          <div className="black">
            <h1 className="title">Staying Healthy At Westwoods</h1>
            <h3 className="subtitle">
              Here is what we are doing in the building to stay healthy and open
            </h3>
            <h4>Service</h4>
            <p>
              <strong>9:00am</strong> will have limited seating for those who
              desire to attend. There will be no kidzone available.
            </p>
            <p>
              <strong>10:45am</strong> will be online only
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
              Please wear masks inside until you get to your seat. Singing has
              been shown to spread droplets way farther than 6 feet, so we are
              asking people to wear masks while singing.
            </p>
            <p>
              Before and after service we can't hang out inside. So, we are
              asking everyone to move outside after services.
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
