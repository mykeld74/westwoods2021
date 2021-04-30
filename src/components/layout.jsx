import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import SEO from './seo'
import Header from './header'
import Modal from './modal'
import DirectionModal from './directionModal'
import './layout.css'

const Container = styled.div`
  padding-top: 50px;
  background: var(--base);
`

const StyledMain = styled.main`
  background: var(--base);
  color: var(--baseColor);
`

const Footer = styled.footer`
  background: var(--headerFooter);
  color: var(--baseColor);
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
  color: var(--baseColor);
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

const Layout = ({ pageTitle, children }) => {
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
      <SEO title={pageTitle} />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Container>
        <StyledMain>{children}</StyledMain>
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
        <DirectionModal />
      </Modal>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
