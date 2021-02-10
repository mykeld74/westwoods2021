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
  ul {
    margin: 2vh 0 0 40px;
  }
`

const Vision = () => {
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
      <SEO title="Vision" />
      <HeroBanner>
        <ImgContainer>
          <StyledImg fluid={data.wwLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
        <h1>Vision</h1>
      </HeroBanner>
      <Section backgroundColor="#111" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Excited Community</h2>
            <p className="left">
              <strong>EXCITED:</strong> In the book of Acts the Bible gives us a
              picture of the early Church: It says, “They were all in awe as
              many wonders and miraculous signs were done by the Apostles.” This
              is where the excitement must come from- to see and experience the
              awe and wonder of God. We will see this by the way He uses us to
              change lives as we distribute His grace to a needy world.
            </p>
            <p className="left">
              <strong>COMMUNITY:</strong> The book of Acts goes on to say that
              they existed in a community, a family, where there was no need
              that was not met. We see WCC growing and thriving out of this
              family environment. We have to be relationally driven, not program
              driven.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#3D3D3D" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Committed to Passion</h2>
            <p className="left">
              <strong>COMMITMENT:</strong> The definition of commitment is to
              pledge yourself to some particular course of action, to pay the
              price to see an expected outcome. We believe that God has called
              us to be a wartime church not a peacetime church. General George
              Patton once said that peace brings out the worst in
              people–-selfishness, contentment, and unbridled pursuit of
              pleasure and comfort–while war brings out the best in
              people–character, honor, commitment, self-sacrifice, and loyalty.
              To be a wartime church takes commitment; we call for it and expect
              it.
            </p>
            <p className="left">
              <strong>PASSION:</strong> Too many people are doing the work of
              the church, God’s work, with empty eyes. Eyes with no flame of
              excitement, no fire of expectation. We want to see passion filling
              our people, lighting up their eyes, and spilling out into the
              world.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#707070" fontColor="#fff">
        <Container>
          <TextContainer>
            <h2>Loving and Following Christ</h2>
            <p className="left">
              <strong>LOVING CHRIST:</strong> Paul said in Second Corinthians
              that it was the love of Christ that controlled him. It is this
              same motivation that drives us. It is out of love that we follow.
            </p>

            <p className="left">
              <strong>FOLLOWING CHRIST:</strong> We want to follow Christ
              naturally. In John 15, Jesus tells us to abide in Him; this
              abiding is essential to our healthy growing relationship with Him
              and our ultimate happiness in life. Abiding brings us connection
              and strength, as well as nourishment to live the life to which
              we’re called. Following Christ has to be the foundation of
              everything we do as a church. To minister outside of this
              relationship is wasted activity. When we follow Christ out of a
              motivation of love, we live lives of worship to Him.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#A3A3A3" fontColor="#333333">
        <Container>
          <TextContainer>
            <h2>Loving and Serving Each Other</h2>
            <p className="left">
              <strong>LOVING EACH OTHER:</strong> The Apostle John records these
              words of Jesus in his gospel: “My command is this: Love one
              another as I have loved you. Greater love has no man than this,
              that he lay his life down for his friends.” That is the level of
              love that Jesus expects us to have for one another. It is when the
              world sees that kind of love that lives are drawn to Christ.
            </p>
            <p className="left">
              <strong>SERVING EACH OTHER:</strong> Love is meeting needs. When
              we love, we serve. The book of Acts is full of examples of people
              giving their lives away for each other. It is only when we put
              others first that we can fulfill God’s dream for us and our
              church.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#D6D6D6" fontColor="#333333">
        <Container>
          <TextContainer>
            <h2>Loving and Reaching the Lost</h2>
            <p className="left">
              <strong>LOVING THE LOST:</strong> It is only when we understand
              and feel the amount of value that God places on all people that we
              can be effective in sharing His grace with the world. People
              matter to God in a tremendous, indescribable way. We need to look
              at all people in our lives as having that degree of value. This is
              how we will reach people, by displaying a different kind of love,
              an unselfish love, a self-sacrificing love, the love of grace.
            </p>
            <p className="left">
              <strong>REACHING THE LOST:</strong> Evangelism will not happen on
              accident! We must be extremely intentional that we do the work of
              evangelism. When we are following Christ naturally and serving and
              being served by a loving community of believers, our lives will be
              so full that we will look at people in our lives that aren’t
              experiencing that and be willing to do whatever it takes to being
              them into our community.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <Section backgroundColor="#FEFEFE" fontColor="#333333">
        <Container>
          <TextContainer>
            <h2>THE NEED FOR BALANCE:</h2>
            <p className="left">
              We need to be extremely conscious as a church and also as
              individuals to maintain balance between these three essential
              elements:
            </p>
            <ul className="left">
              <li>FOLLOWING CHRIST (WORSHIP)</li>
              <li>SERVING EACH OTHER (COMMUNITY)</li>
              <li>REACHING THE LOST (OUTREACH)</li>
            </ul>
            <p className="left">
              If we are to be effective as individuals and as a church, this
              balance is crucial. If we emphasize one and not the others we will
              be out of balance and thus not in a position to make a maximum
              impact.
            </p>
          </TextContainer>
        </Container>
      </Section>
    </Layout>
  )
}

export default Vision
