import React, { forwardRef, useRef, useEffect } from 'react'

const Search = forwardRef<HTMLInputElement, JSX.IntrinsicElements['button']>((props, ref) => {
  return (
    <fieldset>
      <legend>useRef Auto focus</legend>

      <input ref={ref} type="search" defaultValue="test" />
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
