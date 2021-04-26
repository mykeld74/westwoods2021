import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Nav from './menu'
import ToggleTheme from './toggleTheme'

const StyledHeader = styled.header`
  width: 100%;
  background: var(--headerFooter);
  padding: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 5;
  .titleBlock {
    display: flex;
    align-items: center;
  }
`
const StyledLink = styled(Link)`
  font-size: clamp(16px, 2.5vw, 22px);
  margin: 0;
  font-weight: 400;
  color: var(--baseColor);
  transition: all 0.25s ease-in-out;

  :hover {
    color: #ff2c00;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="titleBlock">
      <StyledLink to="/">{siteTitle}</StyledLink>
      <ToggleTheme />
    </div>
    <Nav />
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
