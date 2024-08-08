import React from 'react'

const Inputbox = ({label,placeholder,onChange}) => {
  return (
    <div>
        <div className='text-sm font-medium text-left mx-1 py-2'>
            {label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className='w-full px-2 py-1 border rounded border-slate-200' type="text" />
    </div>
  )
}

export default Inputbox
