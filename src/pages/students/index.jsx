import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Section from '../../components/section'
import Container from '../../components/container'

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
  &.left {
    text-align: left;
  }
`

const ImgContainer = styled.div`
  width: 100%;
  max-width: 325px;
  margin: auto;
`

const WestwoodsStudents = () => {
  const data = useStaticQuery(graphql`
    query {
      wwStudentLogo: file(name: { eq: "wwStudentLogo" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 2200) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Westwoods Students" />
      <div style={{ width: '100vw', padding: '3vh 5vw', background: '#000' }}>
        <ImgContainer>
          <Img fluid={data.wwStudentLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
      </div>
      <Section>
        <Container>
          <TextContainer className="left">
            <p>
              Westwoods Students is a gathering of 6th-12th grade students with
              the purpose of fostering space for students to be known, noticed
              and encouraged in the journey of life. You belong before you
              believe and we seek to offer the environment where students can be
              themselves by connecting amazing adult leaders to come alongside
              each student over these formative years. We have weekly gatherings
              during the school year on Sunday Evenings at 6:30 pm for fun,
              connection, missional communities and to encourage the students in
              the way of Jesus in their lives with friends, family, at school,
              at home and ultimately who they are becoming.
            </p>

            <p>
              We would love to get to know your students and have them join this
              community of fellow students and leaders.
            </p>

            <p>
              This Summer we have several gatherings to connect, enjoy the
              summer days and intentionally encourage one another in the way of
              Jesus. We will seek to press into the truth that apprenticeship to
              Jesus is not on pause just because it is summer, but that He is
              still pursuing us and leading us over these swell days.
            </p>

            <p>
              <a href="mailto:drew@westwoodscc.org">drew@westwoodscc.org</a>
              <br />
              303-279-1616 ext. 2
            </p>
            <iframe
              style={{ border: 0, marginTop: 20 }}
              src="https://calendar.google.com/calendar/embed?src=studentswwcc%40gmail.com&amp;ctz=America%2FDenver"
              frameborder="0"
              scrolling="no"
              className="studentCalendar"
              title="Student Calendar"
            ></iframe>
          </TextContainer>
        </Container>
      </Section>
    </Layout>
  )
}

export default WestwoodsStudents
