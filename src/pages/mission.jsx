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

const Mission = () => {
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
      <SEO title="Mission" />
      <HeroBanner>
        <ImgContainer>
          <StyledImg fluid={data.wwLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
        <h1>Mission</h1>
      </HeroBanner>
      <Section backgroundColor="#111" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>The Body of Christ on Earth</h2>
            <p className="left">
              Over and over in the New Testament the church is referred to as
              the body of Christ, and we need to understand what that means. We
              are His eyes to see a needy world. We are his mouth to speak words
              of grace and truth. We are His heart to love, even the unlovable.
              We are His hands to mend, serve, and reach out. We are His legs
              and feet to carry His message to those who need it!
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#707070" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Corporately Pooling our Spiritual Gifts</h2>
            <p className="left">
              1 Peter 4 says that we should use whatever gifts God has given us
              to serve others. We need to help people find and utilize their
              gifts in order to fulfill God’s plan for this church that He has
              begun in us.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#A3A3A3" fontColor="#333333">
        <Container>
          <TextContainer>
            <h2>To Fulfill His Great Commission</h2>
            <p className="left">
              In Matthew 28, Jesus gives us the clearest directive that anyone
              could hope for, saying, “Go and make disciples of all nations,
              baptizing them in the name of the Father, Son, and the Holy Spirit
              and teaching them to obey all that I have commanded you.” This is
              our simple command straight from the mouth of God–“Make
              Disciples”.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#D6D6D6" fontColor="#333333">
        <Container>
          <TextContainer>
            <h2>As Soon as Possible</h2>
            <p className="left">
              Christians have stood idle long enough. We don’t want to stand
              before a nail scarred Christ and explain to Him why we never quite
              got around to the whole making disciples thing! We must have, and
              act on, a sense of urgency–to take seriously His great commission
              and to take personal, as well as shared, responsibility to make
              sure it is getting done!
            </p>
          </TextContainer>
        </Container>
      </Section>
    </Layout>
  )
}

export default Mission
