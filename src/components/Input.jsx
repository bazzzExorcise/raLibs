import React from 'react'

const Input = (props) => {
  return (
    <input type="text" className='text-xs w-full px-3 py-2 bg-white border border-black rounded-md' placeholder={props.placeholder}/>
  )
}

export default Input
