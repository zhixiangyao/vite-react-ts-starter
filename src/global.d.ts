declare global {
  interface ImportMetaEnv {
    VITE_APP_NODE_ENV: string
    VITE_APP_TITLE: string
    // More environment variables...
  }

  interface Route {
    path: string
    element: JSX.Element
    children: Route[]
  }
}

export {}
