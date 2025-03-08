const getElementById = (id: string) => document.getElementById(id)!

const keyBefore = 'vite-react-ts-'

function setLocalStorage(key: string, value: any): void {
  value
  && localStorage.setItem(
    `${keyBefore}${key}`,
    typeof value === 'string' ? value : JSON.stringify(value),
  )
}

function getLocalStorage<T>(key: string, isParse = false): T | string {
  const cache = localStorage.getItem(`${keyBefore}${key}`) ?? ''
  return isParse ? JSON.parse(cache) : cache
}

function setSessionStorage(key: string, value: any): void {
  value
  && sessionStorage.setItem(
    `${keyBefore}${key}`,
    typeof value === 'string' ? value : JSON.stringify(value),
  )
}

function getSessionStorage<T>(key: string, isParse = false): T | string {
  const cache = sessionStorage.getItem(`${keyBefore}${key}`) ?? ''
  return isParse ? JSON.parse(cache) : cache
}

export { getElementById, getLocalStorage, getSessionStorage, setLocalStorage, setSessionStorage }
