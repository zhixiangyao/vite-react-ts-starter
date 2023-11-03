type Props = {
  x: number
  y: number
  contentRef: React.RefObject<React.ElementRef<'div'>>
}

export const TooltipContainer: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, x, y, contentRef } = props

  return (
    <div
      className="pointer-events-none absolute left-0 top-0 rounded-md bg-gray-400"
      style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  )
}
