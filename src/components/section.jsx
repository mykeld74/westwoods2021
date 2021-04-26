import React from 'react'

const Section = ({ children, backgroundColor, fontColor }) => (
  <div
    style={{
      background: backgroundColor || `var(--base)`,
      color: fontColor || `var(--baseColor)`,
    }}
  >
    {children}
  </div>
)
export default Section
