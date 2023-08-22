import { useState, useRef, useCallback } from 'react'

import Tooltip from './Tooltip'
import type { Rect } from './type'

type Props = {
  tooltipContent: React.ReactNode
}

const ButtonWithTooltip: React.FC<React.PropsWithChildren<Props>> = ({
  tooltipContent,
  ...rest
}) => {
  const [targetRect, setTargetRect] = useState<Rect | null>(null)
  const buttonRef = useRef<React.ElementRef<'button'>>(null)

  const handlePointerEnter = useCallback(() => {
    const rect = buttonRef.current!.getBoundingClientRect()
    setTargetRect({
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
    })
  }, [])

  const handlePointerLeave = useCallback(() => {
    setTargetRect(null)
  }, [])

  return (
    <>
      <button
        ref={buttonRef}
        className="py-1 px-4 bg-gray-400 rounded-md my-2"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...rest}
      />

      {targetRect !== null && <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>}
    </>
  )
}

export default () => {
  return (
    <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-red-400 flex flex-col items-center justify-evenly">
      <legend className="px-2 font-bold">ButtonWithTooltip</legend>

      <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead!
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
    </fieldset>
  )
}
