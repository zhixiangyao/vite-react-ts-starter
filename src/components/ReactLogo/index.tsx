import { css } from '@emotion/css'
import clsx from 'clsx'

import logo from '/@/assets/logo.svg'

const className = css`
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
    <img src={logo} className={clsx('pointer-events-none h-[40vmin]', className)} alt="logo" />
    <p>Hello Vite + React + ReactRouter + Zustand + TypeScript + Emotion + TailwindCSS!</p>
  </>
)
