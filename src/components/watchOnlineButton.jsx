import React from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'

const OnlineButton = Styled.div`
  position: fixed;
  top: 15vh;
  left: 5vw;
  background: #ED2328;
  color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all .25s ease-in-out;
  p{
    margin: 0;
    font-weight: 600;
  }
  :hover{
    transform: scale(1.025);
    box-shadow: 3px 3px 8px rgba(0, 0, 0, .4);
  }
  @media (max-width: 500px){
    top: auto;
    top: 12vh;
    right: auto;
    left: 2vw;
    width: 75px;
    height: 75px;
  }
`

const WatchOnline = () => (
  <Link to="/watch-online">
    <OnlineButton>
      <p>Watch Online</p>
    </OnlineButton>
  </Link>
)

export default WatchOnline
