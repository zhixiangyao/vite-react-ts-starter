import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CountState {
  count: number
  increase: (by: number) => void
}

const useCountStore = create<CountState>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increase: (by) => set((state) => ({ count: state.count + by })),
      }),
      {
        name: 'count-storage',
      },
    ),
  ),
)

export { useCountStore }
