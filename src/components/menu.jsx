import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { useToggleNav } from '../hooks/toggleNav'

const NavOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 20;
`
const Navigation = styled(motion.div)`
  width: 100vw;
  max-width: 325px;
  position: fixed;
  height: 100vh;
  min-height: 100vh;
  background: var(--base);
  z-index: 100;
  top: 0;
  padding: 70px 20px 0;
  color: var(--baseColor);
`
const LinkContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
`

const CloseButton = styled.button`
  background: var(--headerFooter);
  color: var(--baseColor);
  border-radius: 50%;
  border: none;
  font-size: 42px;
  padding: 0;
  width: 60px;
  height: 60px;
  position: absolute;
  top: 10px;
  left: -80px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.33s ease-in-out;

  &.close {
    left: 10px;
    width: 50px;
    height: 50px;
    border: 2px solid var(--baseColor);
    border-radius: 50%;
  }
`
const StyledCloseButtonIcon = styled(FontAwesomeIcon)`
  color: var(--baseColor);
  margin: 0;
  padding: 0;
  font-size: 32px;
`

const NavLink = styled(Link)`
  width: calc(100% - 30px);
  border-radius: 3px;
  display: block;
  font-size: clamp(16px, 1.5vw, 22px);
  color: var(--baseColor);
  font-weight: 400;
  padding-left: 10px;
  margin: 8px 0;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  :hover {
    color: #ddd;
    background-color: #333;
  }
`
const StyledLink = styled.a`
  width: calc(100% - 30px);
  border-radius: 3px;
  display: block;
  font-size: clamp(16px, 1.5vw, 22px);
  color: var(--baseColor);
  font-weight: 400;
  padding-left: 10px;
  margin: 10px 0;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  :hover {
    color: #ddd;
    background-color: #333;
  }
`

const Category = styled(motion.p)`
  display: block;
  font-size: clamp(18px, 1.75vw, 24px);
  color: #f00e0f;
  margin-bottom: 5px;
  font-weight: 600;
`

const navAnimation = {
  closed: {
    x: '100vw',
    transition: {
      duration: 0.33,
      staggerChildren: 0,
      staggerDirection: -1,
    },
  },
  open: {
    x: 'calc(100vw - 325px)',
    transition: {
      duration: 0.33,
      staggerChildren: 0.025,
    },
  },
}

const navItem = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 75,
    x: 75,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

const Nav = ({ setIsVisible }) => {
  const { isToggled, toggle } = useToggleNav(false)

  return (
    <>
      {isToggled && <NavOverlay onClick={toggle} />}
      <Navigation
        animate={isToggled ? 'open' : 'closed'}
        initial="closed"
        variants={navAnimation}
        setIsVisible={setIsVisible}
      >
        <CloseButton onClick={toggle} className={isToggled ? 'close' : ''}>
          <StyledCloseButtonIcon icon={isToggled ? faTimes : faBars} />
        </CloseButton>
        <LinkContainer>
          <Category variants={navItem}>Our Groups</Category>
          <motion.div variants={navItem}>
            <NavLink to="/missional-communities">Missional Communities</NavLink>
          </motion.div>
          <motion.div variants={navItem}>
            <NavLink to="/westwoods-kids">Westwoods Kids</NavLink>
          </motion.div>
          <motion.div variants={navItem}>
            <NavLink to="/students">Westwoods Students</NavLink>
          </motion.div>
          <motion.div variants={navItem}>
            <NavLink to="/women-of-westwoods">Women of Westwoods</NavLink>
          </motion.div>
          <Category variants={navItem}>About Us</Category>
          <motion.div variants={navItem}>
            <NavLink to="/values">Values</NavLink>
          </motion.div>
          <motion.div variants={navItem}>
            <NavLink to="/mission">Mission</NavLink>
          </motion.div>
          <motion.div variants={navItem}>
            <NavLink to="/vision">Vision</NavLink>
          </motion.div>
          <motion.div variants={navItem}>
            <NavLink to="/volunteer-opportunities">
              Volunteer Opportunities
            </NavLink>
          </motion.div>
          <motion.div variants={navItem}>
            <NavLink to="/what-we-believe">What We Believe</NavLink>
          </motion.div>

          <Category variants={navItem}>Building Usage</Category>
          <motion.div variants={navItem}>
            <NavLink to="/facility-rentals">Facility Rentals</NavLink>
          </motion.div>
          <motion.div variants={navItem}>
            <NavLink to="/facility-rentals/weddings">Weddings</NavLink>
          </motion.div>

          <Category variants={navItem}>Have a Question</Category>
          <motion.div variants={navItem}>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </motion.div>

          <Category variants={navItem}>Prayer</Category>
          <motion.div variants={navItem}>
            <StyledLink
              href="https://docs.google.com/forms/d/e/1FAIpQLScjbhWqcpsjKnubkYgRQiX-rAsuNejM8AD2Bk2YzpAqdJh2Tw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit a Prayer Request
            </StyledLink>
          </motion.div>
          <Category variants={navItem}>Give</Category>
          <motion.div variants={navItem}>
            <StyledLink
              href="https://westwoods.churchcenter.com/giving?open-in-church-center-modal=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate to Westwoods
            </StyledLink>
          </motion.div>
        </LinkContainer>
      </Navigation>
    </>
  )
}

export default Nav
