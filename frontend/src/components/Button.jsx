import React from 'react'

const Button = ({label,onClick}) => {
  return (
    <div className='flex justify-center pt-4'>
      <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2'
      onClick={onClick}
      >{label}</button>
    </div>
  )
}

export default Button
