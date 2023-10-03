import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-500 text-white font-medium w-full h-12 px-4 flex items-center justify-between'>
        <div className="">
            <p className='text-size-4'>TABLUE</p>
        </div>
        <ul className='flex items-center justify-between '>
            <li className='mx-1'><a href="#"></a>Home</li>
            <li className='mx-1'><a href="#"></a>About</li>
            <li className='mx-1'><a href="#"></a>Contact</li>
        </ul>
        <div>
         <input className='p-1 rounded mx-3' type="text" placeholder='Search Here' />
         <button className='p-1 rounded ' >Search</button>
        </div>
      
    </div>
  )
}

export default Navbar
