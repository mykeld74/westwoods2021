import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const KidsCampContainer = styled.div`
  background: var(--base);
  color: var(--baseColor);
  padding: 10px;
  p {
    font-size: clamp(18px, 2.5vw, 24px);
    margin-bottom: 10px;
    font-weight: 600;
  }
  .kcLogo {
    width: 100%;
    max-width: 300px;
    margin: auto;
  }
  .regLink {
    box-sizing: border-box;
    background: #f00e0f;
    border: 3px solid #f00e0f;
    width: 300px;
    margin: 20px auto;
    padding: 20px 0;
    border-radius: 10px;
    color: #fff;
    text-align: center;
    font-size: clamp(22px, 2.5vw, 32px);
    font-weight: 600;
    transition: all 0.3s ease-in-out;

    :hover {
      background: #fff;
      color: #f00e0f;
    }
  }
`

const KidsCampModal = () => {
  const imgs = useStaticQuery(graphql`
    query ImgQuery {
      KidsCamp: file(name: { eq: "RockyRailway" }) {
        childCloudinaryAsset {
          fluid(maxWidth: 800) {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <KidsCampContainer>
      <div className="kcLogo">
        <Image fluid={imgs.KidsCamp.childCloudinaryAsset.fluid} />
      </div>
      <p>
        We are so excited to spend the week with your children at Kids Camp
        2021!
      </p>
      <p>
        A free week of games, crafts, and learning for children 4 years old to
        6th grade.
      </p>
      <p>July 12-15, 2021 From 6-8 pm; with free community dinner at 5:30pm</p>
      <a
        href="https://forms.gle/SkcCAZTyaghiVXDq9"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="regLink">Register Here</p>
      </a>
    </KidsCampContainer>
  )
}

export default KidsCampModal
