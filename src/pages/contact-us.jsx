import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/layout'
import HeroBanner from '../components/heroBanner'
import Container from '../components/container'
import ContactForm from '../components/contactForm'

const ImgContainer = styled.div`
  width: 100%;
  max-width: 250px;
  padding: 20px 0;
`
const StyledImg = styled(Img)`
  width: 100%;
`

const ChurchInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 801px) {
    flex-wrap: wrap;
  }
  .churchInfo {
    width: 100%;
    padding: 20px;
  }
`

const ChurchMap = styled.iframe`
  width: 100%;
  height: 350px;
  border: none;
`

const ContactUs = () => {
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
    <Layout pageTitle="Contact Us">
      <HeroBanner>
        <ImgContainer>
          <StyledImg fluid={data.wwLogo.childCloudinaryAsset.fluid} />
        </ImgContainer>
        <h1>Contact Us</h1>
      </HeroBanner>
      <Container>
        <p style={{ paddingTop: 20 }}>
          We would love to hear from you! If you would like to talk to someone
          or request prayer you can reach us at 303.279.1616. You can also
          complete the form below and someone will get back to you.
        </p>
        <ChurchInfo>
          <ContactForm />
          <div className="churchInfo">
            <p>
              <strong>Our address is:</strong>
            </p>
            <p>
              7700 Woodard Drive
              <br />
              Lakewood, CO 80227
            </p>
            <ChurchMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8329214253686!2d-105.08480848435231!3d39.675972808278864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81ad73d8223d%3A0xef2d6fab8083844!2sWestwoods%20Community%20Church!5e0!3m2!1sen!2sus!4v1575133644798!5m2!1sen!2sus"
              allowFullScreen
            ></ChurchMap>
          </div>
        </ChurchInfo>
      </Container>
    </Layout>
  )
}

export default ContactUs
