import styled from 'styled-components'

import logo from '/@/assets/logo.svg'

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

export const ReactLogo: React.FC = () => (
  <>
    <Img src={logo} className="pointer-events-none" alt="logo" />
    <p>Hello Vite + React + ReactRouter + Zustand + TypeScript + StyledComponents + TailwindCSS!</p>
  </>
)
