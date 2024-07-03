import { MazeType } from '@/utils/types'
import React, { ChangeEvent } from 'react'


const Select = (
  {
    value,
    onChange,
    options,
    label,
    isDisabled,
  }: {
    value: string | number
    label: string
    onChange: (value: ChangeEvent<HTMLSelectElement>) => void
    options: {value: string | number; name: string}[]
    isDisabled?: boolean
  }
) => {

  return (
    <div className="flex flex-col items-start gap-1">
      <label className="text-xs text-gray-300 ml-1">{label}</label>
      <select
        disabled={isDisabled}
        className="bg-gray-200 cursor-pointer hover:bg-gray-100 rounded-md transition-all ease-in-out duration-100 active:ring-0 active:border-0 p-2 min-w-[200px] sm:min-w-full"
        id={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select