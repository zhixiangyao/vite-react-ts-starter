const Main: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <main className="flex min-h-full flex-col items-center justify-center bg-blue-100 pt-16 text-black">
      {children}
    </main>
  )
}

export default Main
