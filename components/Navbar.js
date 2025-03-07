import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-gradient-to-r from-purple-900 to-purple-700 flex justify-between px-3 py-6 items-center text-white '>
      <div className="logo font-bold text-2xl"> 
        <Link href="/" className={`text-gray-100 text-4xl`}>BitLinks</Link>
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href="/"><li className='shadow-gray-950 text-gray-100'>Home</li></Link>
        <Link href="/about"><li className={`shadow-gray-950 text-gray-100`}>About</li></Link>
        <Link href="/shorten"><li className={`shadow-gray-950 text-gray-100`}>Shorten</li></Link>
        <Link href="/contact"><li className={`shadow-gray-950 text-gray-100`}>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-md px-3 py-2 font-bold text-gray-100  shadow-gray-950  '>Try Now</button></Link>
          <a href="https://github.com/Prashant07Panwar" 
        target="_blank" ><button className='bg-purple-500 rounded-lg shadow-md px-3 py-2 font-bold text-gray-100 shadow-gray-950  '>GitHub</button></a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar