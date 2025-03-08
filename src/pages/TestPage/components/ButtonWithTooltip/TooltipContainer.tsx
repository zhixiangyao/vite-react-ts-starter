import type { RefObject } from 'react'

interface Props {
  x: number
  y: number
  ref: RefObject<HTMLDivElement | null>
}

export const TooltipContainer: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { children, x, y, ref } = props

  return (
    <div
      className="pointer-events-none absolute left-0 top-0 rounded-md bg-gray-400"
      style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
    >
      <div ref={ref} className="tooltip">
        {children}
      </div>
    </div>
  )
}
