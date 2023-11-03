import {
  CounterReducer,
  ContextProvider,
  PrevPropsState,
  EffectTest,
  ButtonWithTooltip,
} from './components'
import { MemoUseCallback, Memo } from './components'
import { SearchRefs, ButtonRefs } from './components'

export const TestPage: React.FC = () => {
  return (
    <div className="grid-rows-7 grid grid-flow-col gap-4 lg:grid-rows-3">
      <CounterReducer />

      <ContextProvider />

      <SearchRefs />

      <ButtonRefs />

      <PrevPropsState />

      <MemoUseCallback />

      <Memo />

      <EffectTest />

      <ButtonWithTooltip />
    </div>
  )
}
