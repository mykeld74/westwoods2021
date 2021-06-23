import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const WeAreBlock = styled(BackgroundImage)`
  background-position: 50% 0;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0;
  h1 {
    color: #fff;
    text-align: center;
    width: 100%;
  }
  color: #fff;
  .center {
    text-align: center;
  }
  .westwoodsIs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: calc(100% - 20px);
    max-width: 1080px;
    margin: auto;
  }
  .weAre {
    background: rgba(0, 0, 0, 0.6);
    box-sizing: border-box;
    padding: 20px;
  }
  .block1 {
    width: 35%;
    margin-bottom: 15px;
    @media (max-width: 485px) {
      width: 100%;
    }
  }
  .block2 {
    width: 60%;
    margin-bottom: 15px;
    @media (max-width: 485px) {
      width: 100%;
    }
  }
  .block3 {
    width: 100%;
  }
`

const WeAre = () => {
  const data = useStaticQuery(graphql`
    query {
      worship: file(name: { eq: "worship2021" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)
  return (
    <WeAreBlock fluid={data.worship.childCloudinaryAsset.fluid}>
      <h1>Westwoods is:</h1>
      <div className="westwoodsIs">
        <div className="weAre block1">
          <p>
            A non-denominational, intergenerational community of imperfect
            people seeking to be changed by the person of Jesus Christ.
          </p>
        </div>
        <div className="weAre block2">
          <p>
            A church being built on the foundation of authentic relationships
            and the relevant application of God’s Word. Our hope is to be a
            challenging community for believers, a safe community for spiritual
            seekers and a powerful picture of grace and love to our community.
          </p>
        </div>
        <div className="weAre block3">
          <p>
            <strong>
              Maybe you’ve said no to church, but what if church could be
              different?
            </strong>
          </p>
          <ul>
            <li>
              Shouldn’t church be a place of life, connection, excitement and
              enthusiasm?
            </li>
            <li>
              Shouldn’t church be a place where people can feel and experience a
              real connection with God?
            </li>
            <li>
              Shouldn’t church be a place that positively shapes our
              communities?
            </li>
          </ul>
          <h4 className="center">WE THINK SO.</h4>
        </div>
      </div>
    </WeAreBlock>
  )
}

export default WeAre
