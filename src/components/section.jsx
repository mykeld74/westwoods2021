import React from 'react'

const Section = ({ children, backgroundColor, fontColor }) => (
  <div
    style={{
      background: backgroundColor || '#fff',
      color: fontColor || '#000',
    }}
  >
    {children}
  </div>
)
export default Section
