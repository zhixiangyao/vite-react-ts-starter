import React, { forwardRef, useRef, useEffect } from 'react'

const Search = forwardRef<HTMLInputElement, JSX.IntrinsicElements['button']>((props, ref) => {
  return (
    <fieldset className="w-240px p-4 border-4 border-red-400">
      <legend>SearchRefs(Auto focus)</legend>

      <input className="px-2 my-2" ref={ref} type="search" defaultValue="test" />
    </fieldset>
  )
})
Search.displayName = 'Search'

const SearchRefs = () => {
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (input.current) {
      input.current.focus()
    }
  }, [])

  return <Search ref={input} />
}

export default SearchRefs
