export const Main: React.FC<{ slot: React.ReactNode }> = (props) => {
  const { slot } = props

  return (
    <main className="flex min-h-full flex-col items-center justify-center bg-blue-100 pt-16 text-black">{slot}</main>
  )
}
