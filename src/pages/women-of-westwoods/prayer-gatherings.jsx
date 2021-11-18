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
    &.left {
      text-align: left;
    }
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
    <Layout pageTitle="Prayer Gatherings">
      <div style={{ width: '100vw', padding: '3vh 5vw', background: '#fff' }}>
        <ImgContainer>
          <Img fluid={data.wowLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
      </div>
      <Section>
        <Container>
          <TextContainer>
            <h2>Prayer Gatherings</h2>
            <h3 className="left">
              We currently have 2 opportunities to gather for prayer.
            </h3>

            <p className="left">
              <strong>Mondays - 8:00am</strong> - Both men and women are
              welcome. Pray over the church prayer requests and many other
              things. Meets in the Lakewood Area.
            </p>

            <p className="left">
              <strong>3rd Thursday of the Month - 6:30pm</strong> -
              Adoptive/Foster Moms (and those raising a relative) at Westwoods.
            </p>
            <p className="left">
              For more information about either of these gatherings please
              contact Cari Schieffelin <a href="tel:3038070092">303.807.0092</a>{' '}
              or <a href="mailto:jcsmmw@gmail.com">jcsmmw@gmail.com</a>
            </p>
          </TextContainer>
        </Container>
      </Section>
      <WowFooter />
    </Layout>
  )
}

export default WomenOfWestwoods
