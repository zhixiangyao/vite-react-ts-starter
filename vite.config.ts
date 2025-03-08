import type { ConfigEnv } from 'vite'
import fs from 'node:fs'

import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import React from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

/**
 * https://vitejs.dev/config/
 */
const baseConfig = {
  plugins: [React({ jsxImportSource: '@emotion/react' }), checker({ typescript: true }), tailwindcss()],
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
}

export default ({ mode, command }: ConfigEnv) => {
  const { VITE_APP_NODE_ENV, VITE_APP_TITLE } = dotenv.parse(fs.readFileSync(`.env.${mode}`))

  console.log('\x1B[33m%s\x1B[0m', `🏭--NODE ENV (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)
  console.log('\x1B[36m%s\x1B[0m', `🏠--APP TITLE (VITE_APP_TITLE): ${VITE_APP_TITLE}`)

  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  }
  else {
    return defineConfig({ ...baseConfig })
  }
}
