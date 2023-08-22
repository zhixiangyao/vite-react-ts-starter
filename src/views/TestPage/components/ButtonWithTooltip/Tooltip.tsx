import { useRef, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import TooltipContainer from './TooltipContainer'
import type { Rect } from './type'

type Props = {
  targetRect: Rect
}

const Tooltip: React.FC<React.PropsWithChildren<Props>> = ({ children, targetRect }) => {
  const ref = useRef<React.ElementRef<'div'>>(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)

  useLayoutEffect(() => {
    const { height } = ref.current!.getBoundingClientRect()
    setTooltipHeight(height)
  }, [])

  let tooltipX = 0
  let tooltipY = 0

  if (targetRect !== null) {
    tooltipX = targetRect.left
    tooltipY = targetRect.top - tooltipHeight

    if (tooltipY < 0) {
      // 它不适合上方，因此把它放在下面。
      tooltipY = targetRect.bottom
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body,
  )
}

export default Tooltip
