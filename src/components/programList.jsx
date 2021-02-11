import React from 'react'
// import styled from 'styled-components'
import StyledLink from '../components/styledLink'

// const StyledLink = styled.a`

// `

const ProgramList = ({ programs }) => (
  <>
    {programs.map(program => (
      <StyledLink
        href={program.location}
        target="_blank"
        rel="noopener noreferrer"
        id={program.date}
      >
        <p>Program - {program.date}</p>
      </StyledLink>
    ))}
  </>
)
export default ProgramList
