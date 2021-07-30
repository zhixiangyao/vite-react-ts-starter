const getElementById = (id: string) => document.getElementById(id)

const keyBefore = 'vite-react-ts-'

const setLocalStorage = (key: string, value: any): void => {
  value &&
    localStorage.setItem(
      `${keyBefore}${key}`,
      typeof value === 'string' ? value : JSON.stringify(value),
    )
}

const getLocalStorage = (key: string, isParse = false): any => {
  const cache = localStorage.getItem(`${keyBefore}${key}`) ?? ''
  return isParse ? JSON.parse(cache) : cache
}

const setSessionStorage = (key: string, value: any): void => {
  value &&
    sessionStorage.setItem(
      `${keyBefore}${key}`,
      typeof value === 'string' ? value : JSON.stringify(value),
    )
}

const getSessionStorage = (key: string, isParse = false): any => {
  const cache = sessionStorage.getItem(`${keyBefore}${key}`) ?? ''
  return isParse ? JSON.parse(cache) : cache
}

export { getElementById, setLocalStorage, getLocalStorage, setSessionStorage, getSessionStorage }
