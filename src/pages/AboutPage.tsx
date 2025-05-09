import { useCountStore } from '~/store'

export const AboutPage: React.FC = () => {
  const zustandCount = useCountStore(state => state.count)

  return (
    <>
      <h2>About</h2>
      <h2>
        <span>zustand count: </span>
        <span>{zustandCount}</span>
      </h2>
    </>
  )
}
