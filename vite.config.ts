import fs from 'fs'
import { resolve } from 'path' // dotenv is a "zero-dependent" module that extracts variables in the env variable from the '.env.xxx' file.

import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import type { ConfigEnv } from 'vite'
import checker from 'vite-plugin-checker'

/**
 * https://vitejs.dev/config/
 */
const baseConfig = {
  plugins: [React(), checker({ typescript: true })],
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

  console.log('\x1b[33m%s\x1b[0m', `🏭--NODE ENV (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)
  console.log('\x1b[36m%s\x1b[0m', `🏠--APP TITLE (VITE_APP_TITLE): ${VITE_APP_TITLE}`)

  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  } else {
    return defineConfig({ ...baseConfig })
  }
}
