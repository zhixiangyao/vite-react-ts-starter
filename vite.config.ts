import fs from 'fs'
import { resolve } from 'path' // dotenv is a "zero-dependent" module that extracts variables in the env variable from the '.env.xxx' file.

import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import type { ConfigEnv } from 'vite'

/**
 * https://vitejs.dev/config/
 */
const baseConfig = {
  plugins: [React()],
  resolve: {
    alias: [
      {
        find: '/@',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
}

interface ENV {
  [K: string]: string
}

const getEnv = (mode: string) => {
  const envFileName = `.env.${mode}`
  const envObject = Object.create(null) as ENV

  try {
    const envConfig = dotenv.parse(fs.readFileSync(envFileName))
    for (const k in envConfig) Object.assign(envObject, { [k]: envConfig[k] })
    return envObject
  } catch (error) {
    console.error(error)
    return envObject
  }
}

export default ({ mode, command }: ConfigEnv) => {
  /**
   * Such as:
   * import.meta.env.MODE: {string}     app runtime 的模式。
   * import.meta.env.BASE_URL: {string} 部署 app 时的基本 URL 。他由 base 配置项决定。
   * import.meta.env.PROD: {boolean}    app 是否 runtime 在生产环境。
   * import.meta.env.DEV: {boolean}     app 是否 runtime 在开发环境 (永远与 import.meta.env.PROD 相反)。
   */

  const { VITE_APP_NODE_ENV, VITE_APP_TITLE } = getEnv(mode)

  setTimeout(() => {
    console.log()
    console.log('\x1b[33m%s\x1b[0m', `🏭--NODE 环境 (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)
    console.log('\x1b[36m%s\x1b[0m', `🏠--APP 标题 (VITE_APP_TITLE): ${VITE_APP_TITLE}`)
    console.log()
  }, 66)

  if (command === 'serve') {
    return defineConfig({ ...baseConfig })
  } else {
    return defineConfig({ ...baseConfig })
  }
}
