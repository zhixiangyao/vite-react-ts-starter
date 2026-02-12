import type { JSX, Ref, RefObject } from 'react'
import { Component, createRef } from 'react'

type ButtonProps = JSX.IntrinsicElements['button']

function Button({ ref, ...props }: ButtonProps & { ref?: Ref<HTMLButtonElement> }) {
  return (
    <fieldset className="w-300px flex flex-col items-center justify-evenly rounded-md border-4 border-blue-400 px-4 py-2">
      <legend className="px-2 font-bold">ButtonRefs(createRef)</legend>

      <button
        className="text-20px shrink-0 rounded-md bg-red-400 px-8 py-2 text-sm font-bold text-white hover:bg-red-300"
        type="button"
        {...props}
        ref={ref}
      >
        {props.children}
      </button>
    </fieldset>
  )
}
Button.displayName = 'Button'

interface ButtonRefsState {
  button?: RefObject<HTMLButtonElement | null>
  // (Ref<HTMLButtonElement> & RefObject<HTMLButtonElement | null>) | undefined
}

export class ButtonRefs extends Component<object, ButtonRefsState> {
  state: ButtonRefsState = {}

  constructor(props: object) {
    super(props)

    this.state.button = createRef<HTMLButtonElement>()
  }

  override componentDidMount() {
    console.log('componentDidMount:', this.state.button?.current)
  }

  override render() {
    return <Button ref={this.state.button}>Hello</Button>
  }
}
