import { userConfig } from './vite.config.base'
import { getEnv, log } from './vite.config.utils'

import type { UserConfigExport } from 'vite'

export default ({ command, mode }): UserConfigExport => {
  /**
   * Such as:
   * import.meta.env.MODE: {string} app runtime 的模式。
   * import.meta.env.BASE_URL: {string} 部署 app 时的基本 URL 。他由 base 配置项决定。
   * import.meta.env.PROD: {boolean} app 是否 runtime 在生产环境。
   * import.meta.env.DEV: {boolean} app 是否 runtime 在开发环境 (永远与 import.meta.env.PROD 相反)。
   */

  const { VITE_APP_NODE_ENV, VITE_APP_TITLE } = getEnv(mode)

  setTimeout(() => {
    log()
    log('\x1b[33m%s\x1b[0m', `🏭--NODE 环境 (VITE_APP_NODE_ENV): ${VITE_APP_NODE_ENV}`)
    log('\x1b[36m%s\x1b[0m', `🏠--APP 标题 (VITE_APP_TITLE): ${VITE_APP_TITLE}`)
    log()
  }, 66)

  if (command === 'serve') {
    return userConfig
  } else {
    return userConfig
  }
}
