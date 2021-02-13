import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import StyledLink from '../components/styledLink'

const ProgramContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5vh;
  flex-wrap: wrap;
`

const ProgramList = () => {
  const data = useStaticQuery(graphql`
    query {
      dataJson {
        programs {
          date
          location
        }
      }
    }
  `)

  const programs = data.dataJson.programs
  return (
    <ProgramContainer>
      {programs.map(program => (
        <StyledLink
          href={program.location}
          target="_blank"
          rel="noopener noreferrer"
          id={program.date}
          key={program.date}
        >
          <p>Program - {program.date}</p>
        </StyledLink>
      ))}
    </ProgramContainer>
  )
}
export default ProgramList
