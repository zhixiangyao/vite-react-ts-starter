import fs from 'fs'
import dotenv from 'dotenv' // Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中

export const getEnv = (mode: string): any => {
  const envFiles = [`.env.${mode}`]

  for (const envFile of envFiles) {
    try {
      const env = Object.create(null)
      const envConfig = dotenv.parse(fs.readFileSync(envFile))
      for (const k in envConfig) Object.assign(env, { [k]: envConfig[k] })
      return env
    } catch (error) {
      console.error(error)
    }
  }
}

export const { log } = console
