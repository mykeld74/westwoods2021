import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { Link } from 'gatsby'
import KidsCampModal from './kidsCampModal'
import Modal from './modal'

const KidsFooterContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  width: 100%;
  
  background: #fff;
  margin: auto;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
  padding: 10px;
  @media (max-width: 478px){
    flex-wrap: wrap;
    justify-content: center;
  }
`
const KidsButton = Styled.button`
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3760A2;
    border-radius: 40px;
    border: none;
    overflow: hidden;
    width: 100%;
    min-width: 23.5vw;
    height: 80px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    @media (max-width: 478px){
    margin: 10px auto;
    width: 300px;
  }

    p{
      z-index: 2;
      margin: 0;
      font-weight: 600;
      line-height: 1;
      color: #fff;
    }

  &:before{
    content: '';
    position: absolute;
    top: 0;
    right: -50px;
    bottom: 0;
    left: 0;
    /* border-right: 50px solid transparent; */
    border-bottom: 80px solid #540C35;
    transform: translateX(-100%);
    transition: all .3s ease-in-out;    
  }
  &:hover{
    color: #fff;
    &:before{
      transform: translateX(0);
      transition: all .3s ease-in-out;
    }
  }
  *:before{
    z-index: -1;
  }
`

const KidsFooter = () => {
  const [isKidsCampVisible, setIsKidsCampVisible] = useState(true)
  useEffect(() => {
    const showKidsCampModal = window.sessionStorage.getItem('showKidsCamp')
    if (showKidsCampModal) {
      setIsKidsCampVisible(false)
    } else {
      setIsKidsCampVisible(true)
    }
  }, [])
  return (
    <>
      <KidsFooterContainer>
        <Link to="/westwoods-kids">
          <KidsButton>
            <p>Westwoods Kids Home</p>
          </KidsButton>
        </Link>
        <Link to="/westwoods-kids/classes">
          <KidsButton>
            <p>Westwoods Kids Classes</p>
          </KidsButton>
        </Link>
        <a
          href="https://forms.gle/wX4ceuk6q98R9K1W7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <KidsButton>
            <p>Westwoods Kids Application</p>
          </KidsButton>
        </a>
        <KidsButton onClick={() => setIsKidsCampVisible(true)}>
          <p>Kids Camp Info</p>
        </KidsButton>
      </KidsFooterContainer>
      <Modal
        isVisible={isKidsCampVisible}
        setIsVisible={setIsKidsCampVisible}
        closeButtonType="showKidsCamp"
      >
        <KidsCampModal />
      </Modal>
    </>
  )
}

export default KidsFooter
