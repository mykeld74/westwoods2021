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
  p {
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
            <h3>WoW Connect</h3>
            <p>
              Once a month we will create a space to gather as women to build
              community around a different topic. All gatherings will be held at
              Westwoods Community Church. Upcoming dates are:
            </p>
            <ul>
              <li>10/19 at 6:30 PM</li>
              <li>11/16 at 6:30 PM</li>
              <li>11/16 at 6:30 PM</li>
              <li>12/11 at TBD</li>
            </ul>

            <p>
              October Connect on 10/19 will be brought to you by Kirsten Taylor
              and her fitness ministry, Move in Love Ministries. This will be a
              faith focused fitness night for women of every size, shape, age,
              fitness and ability level. ALL are welcome. Don't count yourself
              out! You won't want to miss this encouraging night of movement and
              fun. Make sure to wear comfortable clothes, shoes you can move in,
              a water bottle and a mat if you have one. We will not be offering
              childcare but are hopeful with advance notice we can help everyone
              find a way to come. Please reach out if you need assistance.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <WowFooter />
    </Layout>
  )
}

export default WomenOfWestwoods
