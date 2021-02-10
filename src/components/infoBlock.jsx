import React from 'react'
import Styled from 'styled-components'

const InfoContainer = Styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  .info{
    width: 48%;  
    @media (max-width: 468px){
      width: 100%;
    }
  }
  .infoTitle{
    width: 100%;
    background: #000;
    color: #fff;
    padding: 10px 10px;
    margin-bottom: 10px;
    h2{
      font-size: 18px;
      margin: 0;
    }
  }
`
const InfoBlock = ({ info }) => (
  <InfoContainer>
    {info.map(info => (
      <div className="info" key={info.id}>
        <div className="infoTitle">
          <h2>{info.title}</h2>
        </div>
        <div className="infoDesc">
          <h4>{info.desc}</h4>
        </div>
        <div className="infoTime">
          <p>{info.time}</p>
        </div>
      </div>
    ))}
  </InfoContainer>
)
export default InfoBlock
