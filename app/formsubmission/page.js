"use client"
import React from 'react'
import Link from 'next/link'

const Formsubmission = () => {
  return (
    <div className='flex justify-center container mx-auto '>
     <div className='my-16 flex flex-col gap-16 items-center'>
     <p className='text-4xl font-bold text-black'>Your Query can been Submitted successfully</p>
      <div className='flex gap-4 text-lg text-black'>
      <Link href={"/"} className=' border-[1px] border-purple-600 bg-purple-500 font-bold text-gray-200 rounded-md shadow-lg hover:shadow-xl hover:shadow-purple-950 shadow-purple-950 hover:text-xl p-2'>Go to home</Link>
      <Link href={"/contact"} className='border-[1px] border-purple-600 bg-purple-500 font-bold text-gray-200 rounded-md shadow-lg hover:shadow-xl hover:shadow-purple-950 shadow-purple-950 hover:text-xl p-2'>Send another response</Link></div>
      </div>   
    </div>
  )
}

export default Formsubmission
