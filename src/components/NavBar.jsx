import React from 'react'
import Input from './Input'
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className='w-full flex py-4 items-center text-sm justify-between px-4 sm:px-8 lg:px-40 md:px-20'>
      <div className="flex gap-10 w-full items-center">
        <div className="flex flex-col items-start">
          <h1 className='font-bold text-lg'>raLibs</h1>
          <i className='whitespace-nowrap -mt-1 text-xs'>keep read it</i>
        </div>
        <div className='w-full md:w-80'>
          <Input placeholder="find your fav book"/>
        </div>
        <div className="gap-4 hidden md:flex">
          <p>Home</p>
          <p>Book</p>
          <p>Docs</p>
        </div>
      </div>
      <div className='items-center gap-2 hidden md:flex'>
        <div className="flex items-center gap-2">
          <div className="w-10 rounded-full border overflow-hidden border-black aspect-square">
            <img className='object-cover' src="https://i.pinimg.com/736x/ba/ff/3e/baff3e9a226726ce6e14955531bfd37e.jpg" alt="" />
          </div>
          <div className=''>
            <h1 className="font-semibold">Alif Mahendra</h1>
            <p className='text-xs'>alif.mhndr01@gmail.com</p>
          </div>
        </div>
        <button className='px-3 py-2 ml-6 bg-black rounded-md text-white'>logOut</button>
        <button className='text-2xl border border-black h-full aspect-square p-1 rounded-md'>
          <IoMenu/>
        </button>
      </div>
    </div>
  )
}

export default NavBar
