import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className=' bg-codedragi-blue hover:bg-codedragi-pink p-2 my-2 text-white rounded-md'>
    {text}
  </button>
  )
}

export default Button