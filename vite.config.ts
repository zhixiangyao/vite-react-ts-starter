import { resolve } from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import React from '@vitejs/plugin-react'
import type { ConfigEnv, UserConfig } from 'vite'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression'

const baseConfig: UserConfig = {
  plugins: [
    React({ jsxImportSource: '@emotion/react' }),
    checker({ typescript: true }),
    viteCompression(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(import.meta.dirname, './src'),
      },
    ],
  },
}

export default ({ command }: ConfigEnv) => {
  if (command === 'serve') {
    return defineConfig(baseConfig)
  } else {
    return defineConfig(baseConfig)
  }
}
