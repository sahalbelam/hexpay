import React from 'react'
import { Link } from 'react-router-dom'

const Bottomwarning = ({label,text,to}) => {
  return (
    <div className='flex justify-center gap-5'>
      <div>
        {label}
      <Link to={to}>
        {text}
      </Link>
      </div>
    </div>
  )
}

export default Bottomwarning
