import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding: 0px;
  text-align: center;
  p {
    margin: 0 0 10px 0;
  }
  .mcTitle {
    font-size: 32px;
    font-weight: 600;
  }
  .mcDay {
    font-weight: 500;
  }
`

const McBlock = ({ info }) => {
  return info.map(mc => (
    <Wrapper key={mc.id}>
      <div className="mcHeader">
        <p className="mcTitle">{mc.title}</p>
      </div>
      <p className="mcDay">{mc.day}</p>
      {mc.contact &&
        mc.contact.map(contact => (
          <p className="mcContact" key={contact}>
            {contact}
          </p>
        ))}
      {mc.location && <p className="mcLocation">{mc.location}</p>}
    </Wrapper>
  ))
}

export default McBlock
