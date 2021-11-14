import React from 'react'
import logo from '/@/assets/logo.svg'
import styled from 'styled-components'

const Img = styled.img`
  height: 40vmin;

  @media (prefers-reduced-motion: no-preference) {
    animation: react-logo-spin infinite 20s linear;
  }

  @keyframes react-logo-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`

const ReactLogo = () => (
  <>
    <Img src={logo} className="pointer-events-none" alt="logo" />
    <p>Hello Vite + React + ReactRouter + ReactMobx + TypeScript + StyledComponents + WindiCss!</p>
  </>
)

export default ReactLogo
