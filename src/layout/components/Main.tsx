const Main: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <main className="flex text-black items-center justify-center flex-col min-h-full bg-blue-100 pt-16">
      {children}
    </main>
  )
}

export default Main
