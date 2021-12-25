declare global {
  /**
   * https://cn.vitejs.dev/guide/env-and-mode.html#intellisense
   *
   * 智能提示
   * 默认情况下，Vite为 import.meta.env 提供了类型定义。
   * 随着在 .env[mode] 文件中自定义了越来越多的环境变量，
   * 你可能想要在代码中获取这些以 VITE_ 为前缀的用户自定义环境变量的 TypeScript 智能提示。
   * 要想做到这一点，你可以在 src 目录下创建一个 env.d.ts 文件，
   * 接着按下面这样增加 ImportMetaEnv 的定义：
   */

  interface ImportMetaEnv {
    VITE_APP_NODE_ENV: string
    VITE_APP_TITLE: string
    // 更多环境变量...
  }

  interface Route {
    path: string
    element: JSX.Element
    children: Route[]
  }
}

export {}
