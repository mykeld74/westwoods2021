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
  height: auto;
  min-height: 100vh;
  background: #000;
  z-index: 50;
  top: 0;
  padding: 70px 20px 0;
  color: #fff;
`
const CloseButton = styled.button`
  background: #000;
  color: #fff;
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
  transition: left 0.33s ease-in-out;

  &.close {
    left: 10px;
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50%;
  }
`
const StyledCloseButtonIcon = styled(FontAwesomeIcon)`
  color: #fff;
  margin: 0;
  padding: 0;
  font-size: 32px;
`

const NavLink = styled(Link)`
  width: calc(100% - 30px);
  border-radius: 3px;
  display: block;
  font-size: clamp(16px, 1.5vw, 22px);
  color: #fff;
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
      staggerChildren: 0.05,
    },
  },
}

const navItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
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

        <Category variants={navItem}>Our Groups</Category>
        <motion.div variants={navItem}>
          <NavLink to="/college-ministry">College Ministry</NavLink>
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
      </Navigation>
    </>
  )
}

export default Nav
