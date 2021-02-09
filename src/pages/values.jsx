import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroBanner from '../components/heroBanner'
import Container from '../components/container'
import Section from '../components/section'

const ImgContainer = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 20px 0;
`
const StyledImg = styled(Img)`
  width: 100%;
`

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
  .left {
    text-align: left;
  }
`

const Values = () => {
  const data = useStaticQuery(graphql`
    query {
      wwLogo: file(name: { eq: "wwLogo" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Values" />
      <HeroBanner>
        <ImgContainer>
          <StyledImg fluid={data.wwLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
        <h1>Values</h1>
      </HeroBanner>
      <Section backgroundColor="#111" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Worship</h2>
            <p className="left">
              <strong>PRAYER:</strong> We must be intentional to insure that
              prayer is honored, both personally and as a church body, and that
              everything we do is under-girded by the power of God through
              prayer.
            </p>

            <p className="left">
              <strong>EXCELLENCE:</strong> We must be intentional to insure that
              we do everything with the highest possible quality in order to
              honor Christ. We will sacrifice quantity for quality.
            </p>

            <p className="left">
              <strong>PURPOSE:</strong> We must be intentional to insure that
              every event and program is purposeful and fits within the
              parameters of the vision, mission, and values of WCC; and that the
              purpose for our existence is clearly understood by the body.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#3D3D3D" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Community</h2>
            <p className="left">
              <strong>RELATIONSHIPS:</strong> We must be intentional to insure
              that we don’t forget the power of authentic, integrity-filled,
              honest, and challenging relationships. We must always remember
              that relationships are the conveyor belt on which life change
              happens.
            </p>

            <p className="left">
              <strong>OWNERSHIP:</strong> We must be intentional to insure that
              the body takes personal responsibility for their church and their
              ministry–physically, mentally, spiritually, and financially.
            </p>

            <p className="left">
              <strong>WORD OF GOD:</strong> We must be intentional to insure
              that the Word of God is taught and honored, its principles
              followed and displayed in every event, and that people are
              increasing in their desire for God’s Word and their application of
              it.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#707070" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Outreach</h2>
            <p className="left">
              <strong>RELEVANCE:</strong> We must be intentional to insure that
              we communicate the truth of the Gospel in real, needed, and
              understandable ways, and every program element is relevant to the
              intended audience.
            </p>

            <p className="left">
              <strong>EVANGELISM:</strong> We must be intentional to insure that
              we are really reaching people with Gospel of Jesus Christ, and
              that the body is trained, challenged, motivated, and taking
              responsibility to share Christ within their relational circles.
            </p>

            <p className="left">
              <strong>MISSIONS:</strong> We must be intentional to insure that
              we are really impacting the world with the Gospel of Jesus Christ,
              and that the body is trained, challenged, motivated, and taking
              responsibility to share the message of Christ globally. This is
              expressed in our desire to start and to support new churches and
              to care for the poor in our community, as well as being active in
              mission activities around the world.
            </p>
          </TextContainer>
        </Container>
      </Section>
    </Layout>
  )
}

export default Values
