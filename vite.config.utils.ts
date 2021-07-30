import fs from 'fs'
import dotenv from 'dotenv' // Dotenv 是一个零依赖的模块，它能将 env 变量中的变量从 '.env*' file 提取出来

interface ENV {
  [K: string]: string
}

export const getEnv = (mode: string): ENV => {
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
