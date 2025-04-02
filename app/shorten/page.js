"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if(result.success){setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)}
                seturl("")   
                setshorturl("")
                console.log(result)
                alert(result.message)
            
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className='mx-auto max-w-lg min-h-[50vh] bg-purple-100 my-16 p-4 rounded-lg flex flex-col gap-8'>
            <h1 className='font-extrabold text-4xl text-purple-700 text-center'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2 items-center'>
                <input type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md w-[80%] hover:w-[90%]'
                    placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }} />

                <input type="text"
                    value={shorturl}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md w-[80%] hover:w-[90%]'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }} />
                <button onClick={generate} className='bg-purple-800 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-lg text-white w-[80%] hover:shadow-gray-800'>Generate</button>
                {generated && <> <div className='flex gap-1 overflow-hidden'><span className='font-bold text-lg'>Your Link:</span><code><Link target="_blank" href={generated} className='text-purple-700 font-bold text-lg overflow-hidden text-ellipsis w-[60%]'>{generated}</Link> 
                </code></div></>}
            </div>
        </div>
    )
}

export default Shorten