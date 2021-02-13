import Styled from 'styled-components'

const StyledLink = Styled.a`
  box-sizing: border-box;
  width: calc(100% - 30px);
  max-width: 400px;
  background: #ED2025;
  color: #fff;
  border-radius: 5px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 15px 0;
  cursor: pointer;
  transition: all .2s ease-in-out;
  p{
    margin: 0;
    font-size: 20px;
    font-weight: 700;
  }
  :hover{
    transform: scale(1.025);
    box-shadow: 3px 3px 8px rgba(0, 0, 0, .4);
  }
`

export default StyledLink
