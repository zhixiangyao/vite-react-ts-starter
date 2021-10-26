import React, { forwardRef, createRef } from 'react'

type ButtonProps = JSX.IntrinsicElements['button']

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-blue-400">
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

const button = createRef<HTMLButtonElement>()

class ButtonRefs extends React.Component {
  override componentDidMount() {
    console.log(button.current)
  }

  override render() {
    return <Button ref={button}>Hello</Button>
  }
}

export default ButtonRefs
