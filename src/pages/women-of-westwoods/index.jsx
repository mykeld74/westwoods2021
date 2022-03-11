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
  }
  .left {
    text-align: left;
  }
`

const ImgContainer = styled.div`
  width: calc(100% - 30px);
  max-width: 250px;
  margin: auto;
  &.mealtrain {
    width: calc(100% - 30px);
    max-width: 350px;
    margin: 20px 0;
  }
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
      mealTrainLogo: file(name: { eq: "mealtrainLogo" }) {
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
            <p>
              The Women's Ministry of Westwoods is an arm of the church that
              provides opportunities for every woman to connect relationally, be
              encouraged in their walk with Jesus, and equipped to impact their
              world for the Kingdom. Whether it's through monthly Connect
              events, mom gatherings, focusing on fitness, regular bible study,
              praying together, holiday events, play dates, service
              opportunities, tea and coffee chats, impromptu fun, mentor
              meetings or parenting discussions, there is a place for YOU! Our
              hope is that ladies will be encouraged and challenged by doing
              life and building friendships!
            </p>

            <p>
              <strong>All Women Welcome!</strong>
            </p>

            <p className="left">
              If you would to learn more or have any questions, please email us
              at:{' '}
              <a href="mailto:womenofwestwoods@gmail.com">
                womenofwestwoods@gmail.com
              </a>
            </p>

            <p className="left">
              Life happens! We get to be the part of peoples happiest and
              hardest moments as we do life with them. As a community, we want
              to be an on-going resource to help in life's big moments. We are
              creating an on-going meal train crew sign up. If you would like to
              be someone to potentially prepare and drop off a meal for someone
              in need, please add your info to this google form:
            </p>

            <a
              href="https://forms.gle/dpUAMn7w3Ngwgazg9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="left">https://forms.gle/dpUAMn7w3Ngwgazg9</p>
              <ImgContainer className="mealtrain">
                <Img fluid={data.mealTrainLogo.childCloudinaryAsset.fluid} />
              </ImgContainer>
            </a>
            <h3>Easter is Coming (April 17th)</h3>
            <p>But the Season of Lent leads us in and prepares us.</p>

            <p>
              And Ladies, we'd like to invite you to join us as we press into
              taking ourselves off the hook for perfection. Our friend Jessica
              has co-written a devotional with a companion guide to walk us
              through this season of Lent with Hope, AND the reality of
              brokenness.
            </p>

            <p>
              Click{' '}
              <a
                href="https://katebowler.com/good-enough/#pre-order"
                target="_blank"
                rel="noopener noreferrer"
              >
                HERE
              </a>{' '}
              to purchase the book Good Enough - 40ish Devotionals for a Life of
              Imperfection by Kate Bowler and Jessica Richie, and Click HERE to
              order your Free Downloadable Lent Reflection Guide.
            </p>
            <p>
              Visit the{' '}
              <a
                href="https://www.facebook.com/womenofwestwoods"
                target="_blank"
                rel="noopener noreferrer"
              >
                WoW FB page
              </a>{' '}
              to comment and be in communication as we embrace this season
              together.
            </p>

            <p>
              You can participate in the Lent reflections without purchasing the
              book, however it will enhance your experience with the blessings
              contained it, and you'll have it for the days beyond.
            </p>
          </TextContainer>
        </Container>
      </Section>
      <WowFooter />
    </Layout>
  )
}

export default WomenOfWestwoods
