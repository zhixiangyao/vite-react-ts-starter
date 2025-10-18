import type { Rect } from './type'

import { useCallback, useRef, useState } from 'react'
import { Tooltip } from './Tooltip'

interface Props {
  tooltipContent: React.ReactNode
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({ tooltipContent, ...rest }) => {
  const [targetRect, setTargetRect] = useState<Rect | null>(null)
  const buttonRef = useRef<React.ComponentRef<'button'>>(null)

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
        type="button"
        ref={buttonRef}
        className="my-2 rounded-md bg-gray-400 px-4 py-1"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...rest}
      />

      {targetRect !== null && <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>}
    </>
  )
}

export function ButtonWithTooltip() {
  return (
    <fieldset className="w-300px flex flex-col items-center justify-evenly rounded-md border-4 border-red-400 px-4 py-2">
      <legend className="px-2 font-bold">ButtonWithTooltip</legend>

      <Container
        tooltipContent={(
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead!
          </div>
        )}
      >
        Hover over me (tooltip above)
      </Container>
    </fieldset>
  )
}
