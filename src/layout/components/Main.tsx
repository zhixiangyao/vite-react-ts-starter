import React from 'react'

const Main: React.FC<{ children: any }> = (props) => {
  const { children } = props
  return (
    <main
      className={`bg-blue-800 flex text-black items-center justify-center flex-col min-h-full bg-blue-100 pt-16`}
    >
      {children}
    </main>
  )
}

export default Main
