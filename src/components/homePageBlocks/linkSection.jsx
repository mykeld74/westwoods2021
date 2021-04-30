import React, { useState } from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Modal from '../modal'
import DirectionModal from '../directionModal'

const LinkContainer = styled.div`
  padding: 10px 0;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  background: var(--base);
  /* @media (max-width: 768px) {
    grid-template-columns: 1fr;
  } */

  .linkBlock {
    width: 100%;
    background-position: 50% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 35vh;
    width: 100%;
    text-align: center;
    cursor: pointer;
    p {
      font-size: clamp(22px, 2.5vw, 32px);
      line-height: 1.4;
      text-shadow: 0 0 2px #0a0a0a;
      font-weight: 700;
      transition: color 0.3s ease-in-out;
      color: #fff;
    }
    :hover {
      p {
        color: #ff2c00;
      }
    }
  }
`

const LinkBlock = styled(BackgroundImage)`
  background-position: 50% 10%;
`

const LinkSection = () => {
  const data = useStaticQuery(graphql`
    query {
      missSunday: file(name: { eq: "missSunday" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      currentSeries: file(name: { eq: "currentSeries" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
      building: file(name: { eq: "building" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  const [isDirectionVisible, setIsDirectionVisible] = useState(false)
  return (
    <>
      <LinkContainer>
        <a
          href="https://www.facebook.com/pg/WestwoodsCommunityChurch/videos/?ref=page_internal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkBlock
            fluid={data.missSunday.childCloudinaryAsset.fluid}
            className="missSunday linkBlock"
          >
            <div>
              <p>
                Miss a Sunday?
                <br />
                Watch it here.
              </p>
            </div>
          </LinkBlock>
        </a>
        <Link to="/current-series">
          <LinkBlock
            fluid={data.currentSeries.childCloudinaryAsset.fluid}
            className="linkBlock"
          >
            <p>Current Series</p>
          </LinkBlock>
        </Link>
        <LinkBlock
          fluid={data.building.childCloudinaryAsset.fluid}
          className="linkBlock"
          onClick={() => setIsDirectionVisible(true)}
        >
          <p>Service Times and Directions</p>
        </LinkBlock>
      </LinkContainer>
      <Modal
        isVisible={isDirectionVisible}
        setIsVisible={setIsDirectionVisible}
      >
        <DirectionModal />
      </Modal>
    </>
  )
}

export default LinkSection
