import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  background: #000;
  padding: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  h1 {
    font-size: clamp(16px, 2.5vw, 22px);
    margin: 0;
    font-weight: 400;
  }
`
const StyledLink = styled(Link)`
  color: #fff;
  transition: all 0.25s ease-in-out;
  :hover {
    color: #ff2c00;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
