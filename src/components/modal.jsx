import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import Styled from "styled-components"

const ModalContainer = Styled.div`
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  overflow-y: auto;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
  `

const ModalOverlay = Styled(motion.div)`
  width: 100vw;
  height: 300vh;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = Styled(motion.div)`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 960px;
  margin: auto;
  z-index: 5;
  background: #333;
  color: #fff;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 960px){
    border-radius: 0;
  }
  button{
    position: absolute;
    top: -20px;
    right: -20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ED2328;
    color: #fff;
    border: 3px solid #fff;
    cursor: pointer;
    p{
      margin: -5px 0 0 0;
      padding: 0;
      font-size: 32px;
      color: #fff;
    }
    @media (max-width: 500px){
      position: fixed;
      top: 0;
      right: 0;
    }
  }
`
const Modal = ({ isVisible, setIsVisible, programs, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <ModalContainer>
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVisible(false)}
          />

          <ModalContent
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "100vh" }}
            transition={{ duration: 0.5 }}
          >
            <button onClick={() => setIsVisible(false)}>
              <p>&#10007;</p>
            </button>
            {children}
          </ModalContent>
        </ModalContainer>
      )}
    </AnimatePresence>
  )
}

export default Modal
