"use server"
import fs from "fs/promises"
import React from 'react'
import Link from "next/link"
export const handeformsubmit = async(e)=>{
 await fs.writeFile("Query.txt",`Name : ${e.name}/n Email is ${e.email}/n Query is ${e.query} `)   
}
export const handleclick=async()=>{  
}

