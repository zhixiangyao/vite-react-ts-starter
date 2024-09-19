import { css } from '@emotion/react'

import logo from '/@/assets/logo.svg'

const style = css`
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
    <img src={logo} className="pointer-events-none h-[40vmin]" css={style} alt="logo" />
    <p>Hello Vite + React + ReactRouter + Zustand + TypeScript + Emotion + TailwindCSS!</p>
  </>
)
