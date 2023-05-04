import React from 'react'
import { forwardRef, createRef, type RefObject } from 'react'

type ButtonProps = JSX.IntrinsicElements['button']

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-blue-400 flex flex-col items-center justify-evenly">
    <legend className="px-2 font-bold">ButtonRefs(createRef)</legend>

    <button
      className="text-20px font-bold bg-red-400 hover:bg-red-300 text-white flex-shrink-0 px-8 py-2 rounded-md text-sm font-medium"
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

class ButtonRefs extends React.Component<{}, ButtonRefsState> {
  state: ButtonRefsState = {
    button: null,
  }

  constructor(props: {}) {
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

export default ButtonRefs
