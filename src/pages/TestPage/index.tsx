import {
  ButtonRefs,
  ButtonWithTooltip,
  ContextProvider,
  CounterReducer,
  EffectTest,
  Memo,
  MemoUseCallback,
  PrevPropsState,
  SearchRefs,
} from './components'

export const TestPage: React.FC = () => {
  return (
    <div className="grid grid-flow-col grid-rows-7 gap-4 lg:grid-rows-3">
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
