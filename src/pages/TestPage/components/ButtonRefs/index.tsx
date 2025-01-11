import React from 'react'
import { createRef, forwardRef, type RefObject } from 'react'

type ButtonProps = JSX.IntrinsicElements['button']

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <fieldset className="w-300px flex flex-col items-center justify-evenly rounded-md border-4 border-blue-400 px-4 py-2">
    <legend className="px-2 font-bold">ButtonRefs(createRef)</legend>

    <button
      className="text-20px flex-shrink-0 rounded-md bg-red-400 px-8 py-2 text-sm font-bold text-white hover:bg-red-300"
      type="button"
      {...props}
      ref={ref}
    >
      {props.children}
    </button>
  </fieldset>
))
Button.displayName = 'Button'

interface ButtonRefsState {
  button: RefObject<HTMLButtonElement> | null
}

export class ButtonRefs extends React.Component<object, ButtonRefsState> {
  state: ButtonRefsState = {
    button: null,
  }

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
