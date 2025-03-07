"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { handleclick } from '../actions/form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


const contact = () => {
  const router = useRouter()  
  
       const{ register,
        handleSubmit,
        watch,
        setError,
        formState: { errors,isSubmitting },
      } = useForm()

      const delay = ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve()
            }, 3000);
        })
      }
    
      const onsubmit = async(data)=>{ 
        await delay()
        const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify(data);
  console.log(raw)
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  const r = await fetch("http://localhost:3000/api/generate/formaction", requestOptions)
  const d = await r.json()
      if(d.success){
       router.push("/formsubmission")
      }
    }
      return (
    <div className='container mx-auto flex justify-center  min-h-[50vh] p-4'>
      <form action="" onSubmit={handleSubmit(onsubmit)} className='flex bg-purple-200 flex-col gap-6 border-[1px] border-purple-300 p-8 rounded-lg shadow-md shadow-purple-950  mt-8'>
       <div className='flex flex-start  justify-center items-center gap-[3px]'>
       <label htmlFor="name" className='text-lg'>Name</label>
       <input type="text" id={"name"} {...register("username",{required:{value:true,message:"Username is required"},minLength:{value:3,message:"Username should atleast 3 characters"},maxLength:{value:15,message:"Username should not exceed the length of 15"}})} className='py-2 px-2 w-[25vw] rounded-md text-md'  placeholder='Enter name'/>
       </div>
       {errors.username && <div className = "text-red-700">{errors.username.message}</div>}
       <div className='flex flex-start justify-center items-center gap-2'>
       <label htmlFor="email" className='text-lg'>Email</label>
       <input type="email" id={"name"} className='py-2 px-2 w-[25vw] text-md rounded-md' {...register("email",{required:{value:true,message:"Email is required"},minLength:{value:7,message:"Email should be of minimum length 7"},maxLength:{value:30,message:" Email max length is exceeded"}})} placeholder='Enter Email'/>
       </div>
       {errors.email && <div className = "text-red-700">{errors.email.message}</div>}
       <div className='flex flex-start justify-center items-center gap-1'>
       <label htmlFor="query" className='text-lg'>Phone</label>
       <input type="tel" list='lists' id={"name"}  className='py-2 px-2 w-[25vw] text-md rounded-md' placeholder='Enter Phone Number' {...register("phone",{required:{value:true,message:"Phone number is required"},minLength:{value:14,message:"Enter valid contact number"},maxLength:{value:14,message:"Enter valid contact number"}})}/>
       <datalist id='lists'><option value="+91-">india</option><option value=""></option><option value=""></option><option value="+1"></option><option value=""></option><option value=""></option><option value=""></option><option value="+2"></option><option value="+3"></option><option value=""></option></datalist>
       </div>
       {errors.phone && <div className = "text-red-700">{errors.phone.message}</div>}
       <div className='flex flex-start justify-center items-center gap-1'>
       <label htmlFor="query" className='text-lg'>Query</label>
       <input type="input" id={"name"}  className='py-2 px-2 w-[25vw] text-start text-md rounded-md' placeholder='Enter Query' {...register("query",{required:false,maxLength:{value:50,message:"max length is 50"}})}/>
       </div>
       {errors.query && <div className = "text-red-700">{errors.query.message}</div>}
      <button className=' rounded-lg shadow-md hover:shadow-lg bg-purple-700 hover:shadow-slate-900 shadow-slate-900 py-2 px-2 my-3 text-lg text-gray-100 font-bold'>Submit</button>
      {isSubmitting && <div className='flex flex-col gap-3 justify-center items-center opacity-50 w-1/4 rounded-md mx-auto'><div className='w-1 h-1 p-2 rounded-full bg-red-500 animate-ping'></div><span className='text-red-950  animate-bounce text-xl font-bold'>Processing</span></div>}
      </form>
    </div>
  )
}

export default contact
