declare global {
  /**
   * https://cn.vitejs.dev/guide/env-and-mode.html#intellisense
   *
   * Intelligent hint:
   * By default, Vite provides type definitions for import.meta.env.
   * As more and more ENV-variables are customized in the .env[mode] file
   * You may want to get TypeScript IntelliSense for these user-defined ENV-variables prefixed with Vite in your code.
   * To do this, you can create an env.d.ts file in the src directory
   * Then add the definition of ImportMetaEnv as follows:
   */

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
