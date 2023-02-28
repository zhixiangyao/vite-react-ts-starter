import React, { useState } from 'react'
import { FixedSizeList as List } from 'react-window'

const VirtualRolling: React.FC = () => {
  const [content, setContent] = useState('null')
  const [value, setInputValue] = useState('')

  return (
    <div>
      <div>
        <input
          value={value}
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2"
          onChange={(e) => {
            setInputValue(e.target.value)
            setContent(e.target.value)
          }}
        />
      </div>

      <div className="p-2 rounded-lg border-5px border-red-500 border-solid mt-5 inline-block">
        <List useIsScrolling height={400} itemCount={30000} itemSize={35} width={300}>
          {({ index, style }) => (
            <div style={style}>
              Row {index} - {content}
            </div>
          )}
        </List>
      </div>
    </div>
  )
}

export default VirtualRolling
