declare global {
  interface ImportMetaEnv {
    VITE_APP_NODE_ENV: string
    // More environment variables...
  }

  interface Route {
    path: string
    element: JSX.Element
    children: Route[]
  }
}

export {}
