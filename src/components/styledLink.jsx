import Styled from 'styled-components'

const StyledLink = Styled.a`
  box-sizing: border-box;
  width: calc(100vw - 20px);
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
  p{
    margin: 0;
    font-size: 20px;
    font-weight: 700;
  }
`

export default StyledLink
