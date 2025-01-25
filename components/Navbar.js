import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-gradient-to-r from-purple-700 to-purple-400 flex justify-between px-3 py-6 items-center text-white '>
      <div className="logo font-bold text-2xl"> 
        <Link href="/" className={`text-gray-100 text-4xl`}>BitLinks</Link>
      </div>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href="/"><li className='px-4 py-1 rounded-2xl shadow-md shadow-gray-950 text-gray-200 bg-purple-500 font-bold hover:text-lg hover:bg-purple-700'>Home</li></Link>
        <Link href="/about"><li className={`px-4 py-1 rounded-2xl shadow-md shadow-gray-950 text-gray-200 bg-purple-500 font-bold hover:text-lg hover:bg-purple-700`}>About</li></Link>
        <Link href="/shorten"><li className={`px-4 py-1 rounded-2xl shadow-md shadow-gray-950 text-gray-200 bg-purple-500 font-bold hover:text-lg hover:bg-purple-700`}>Shorten</li></Link>
        <Link href="/contact"><li className={`px-4 py-1 rounded-2xl shadow-md shadow-gray-950 text-gray-200 bg-purple-500 font-bold hover:text-lg hover:bg-purple-700`}>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-md px-3 py-2 font-bold text-gray-100  shadow-gray-950 hover:text-lg hover:bg-purple-700'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-md px-3 py-2 font-bold text-gray-100 shadow-gray-950 hover:text-lg hover:bg-purple-700'>GitHub</button></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar