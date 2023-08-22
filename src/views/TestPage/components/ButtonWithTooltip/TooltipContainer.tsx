type Props = {
  x: number
  y: number
  contentRef: React.RefObject<React.ElementRef<'div'>>
}

const TooltipContainer: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, x, y, contentRef } = props

  return (
    <div
      className="absolute pointer-events-none left-0 top-0 bg-gray-400 rounded-md"
      style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  )
}

export default TooltipContainer
