import React from 'react'
import logo from '/@/assets/logo.svg'
import style from './index.module.css'

const ReactLogo = () => (
  <>
    <img src={logo} className={`pointer-events-none ${style.ReactLogo}`} alt="logo" />
    <p>Hello Vite + React + React Router + React Redux + TypeScript!</p>
  </>
)

export default ReactLogo
