import React from 'react'
import '../index.css'

const Subheading = ({label}) => {
  return (
    <div className='flex justify-center text-sm text-slate-600 font-normal pt-2'>
      {label}
    </div>
  )
}

export default Subheading
