import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
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
    <Layout>
      <SEO title="Women of Westwoods" />
      <div style={{ width: '100vw', padding: '3vh 5vw' }}>
        <ImgContainer>
          <Img fluid={data.wowLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
      </div>
      <Section>
        <Container>
          <TextContainer className="left">
            <p>
              The Women’s Ministry at Westwoods is an arm of the church that
              provides opportunity by inviting every woman to connect
              relationally, encouraging growth in their relationship with Jesus,
              and equipping them to impact their world for the Kingdom. Whether
              it’s through regular bible study, conferences, retreats, mom
              gatherings, play dates, mentor meetings, parenting discussions,
              holiday events, service opportunities, tea and coffee chats or
              impromptu fun, our hope is that ladies will be encouraged and
              challenged by doing life with other ladies!
            </p>

            <p>All Women Welcome!</p>

            <p>
              If you would like to learn more about any of our programs or have
              any questions, please email us at:{' '}
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
