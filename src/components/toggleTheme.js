import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const ThemeButton = styled.button`
  position: relative;
  width: 36px;
  height: 18px;
  border-radius: 20px;
  border: 1px solid #777;
  z-index: 3;
  overflow: hidden;
  background: var(--baseColor);
  transition: background 0.25s ease-in-out;
  margin-left: 20px;
  cursor: pointer;
  .sliderButton {
    width: 20px;
    height: 18px;
    background: var(--base);
    border-radius: 13px;
    position: absolute;
    left: 0;
    top: -1px;
    transition: all 0.25s ease-in-out;
    .lightMode & {
      left: 100%;
      transform: translateX(-100%);
    }
  }
`

const ToggleTheme = () => {
  const [theme, setTheme] = useState('darkMode')
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    // setTheme(mode)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setTheme(theme)
    }
    document.body.className = theme === 'darkMode' ? 'darkMode' : 'lightMode'
  }, [theme])

  return (
    <>
      <ThemeButton
        onClick={() => (
          setTheme(theme !== 'darkMode' ? 'darkMode' : 'lightMode'),
          setMode(theme !== 'darkMode' ? 'darkMode' : 'lightMode')
        )}
      >
        <div className="sliderButton"></div>
      </ThemeButton>
    </>
  )
}

export default ToggleTheme
