import React from 'react'
import '../index.css'

const Heading = ({label}) => {
  return (
    <div className='flex justify-center text-2xl font-bold pt-6'>
        {label}
    </div>
  )
}

export default Heading
