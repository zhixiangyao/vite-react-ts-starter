import { useCountStore, useDataStore } from '/@/store'

const AboutPage: React.FC = () => {
  const zustandCount = useCountStore((state) => state.count)
  const dataState = useDataStore()

  return (
    <>
      <h2>About</h2>
      <h2>
        <span>zustand count: </span>
        <span>{zustandCount}</span>
      </h2>
      <h2>
        <span>mini redux count: </span>
        <span>{dataState.data}</span>
      </h2>
    </>
  )
}

export default AboutPage
