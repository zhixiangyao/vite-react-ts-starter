import React, { forwardRef, createRef } from 'react'

type ButtonProps = JSX.IntrinsicElements['button']

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <fieldset>
    <legend>createRef Button</legend>

    <button className="bg-light-400 p-2 rounded-sm" type="button" {...props} ref={ref}>
      {props.children}
    </button>
  </fieldset>
))
Button.displayName = 'Button'

const button = createRef<HTMLButtonElement>()

class ButtonRefs extends React.Component {
  hhh = () => {}

  override componentDidMount() {
    console.log(button.current)
  }

  override render() {
    return <Button ref={button}>Hello</Button>
  }
}

export default ButtonRefs
