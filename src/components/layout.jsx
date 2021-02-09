import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Header from './header'
import Modal from './modal'
import './layout.scss'

const Container = styled.div`
  padding-top: 50px;
`

const Footer = styled.footer`
  background: #000;
  color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 468px) {
    flex-wrap: wrap;
  }
  .footerLogoContainer {
    width: 100px;
  }
  p {
    margin: 0;
    line-height: 2;
    font-size: 18px;
  }
  .directions {
    cursor: pointer;
    p:hover {
      text-decoration: underline;
    }
  }
`

const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  margin: 0;
  line-height: 2;
  font-size: 18px;
  padding: 0;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    color: #ff2c00;
  }
`

const Layout = ({ children }) => {
  const [isDirectionVisible, setIsDirectionVisible] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <main>{children}</main>
        <Footer>
          <div className="footerLogoContainer">
            <Image fluid={data.wwLogo.childCloudinaryAsset.fluid} />
          </div>
          <div>
            <p>©{new Date().getFullYear()} Westwoods Community Church</p>
            <StyledButton onClick={() => setIsDirectionVisible(true)}>
              Directions and Service Times
            </StyledButton>
            <p>7700 W. Woodard Drive | Lakewood | CO | 80227 | 303.279.1616</p>
          </div>
        </Footer>
      </Container>
      <Modal
        isVisible={isDirectionVisible}
        setIsVisible={setIsDirectionVisible}
      >
        <>
          <div style={{ width: '100%' }}>
            <h2>Join us this Sunday:</h2>
            <h3>9:00am</h3>
            <p>7700 Woodard Dr.</p>
            <p>Lakewood, CO 80227</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8329214253686!2d-105.08480848435234!3d39.675972808278864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81ad73d8223d%3A0xef2d6fab8083844!2sWestwoods%20Community%20Church!5e0!3m2!1sen!2sus!4v1569100714699!5m2!1sen!2sus"
            frameBorder="0"
            allowFullScreen=""
            title="Westwoods Map"
            style={{ width: '100%', height: '50vh' }}
          ></iframe>
        </>
      </Modal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
