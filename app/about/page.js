import React from 'react'
import localFont from "next/font/local";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

const about = () => {
  return (
    <div className={`space-y-0`}> 
    <section className="pb-10 pt-4  bg-transparent space-y-2 min-h-[82vh]">
        <div className="w-[80%] mx-auto px-6 text-center cursor-pointer rounded-xl shadow-xl border-[1px] border-t-purple-100 shadow-purple-950 bg-purple-200 py-2">
            <div className={`my-2 rounded-xl hover:text-lg px-2 shadow-lg hover:shadow-lg hover:shadow-purple-900 border-[1px] border-t-purple-100 border-purple-400 shadow-purple-900`}>
            <p className={`text-2xl font-bold mb-2  ${poppins.className}`}>About Our URL Shortener App</p>
            <p className=" mb-2 font-semibold">
                Welcome to our URL Shortener app! We help you take long and cumbersome URLs and turn them into shorter, easy-to-share links.
                Whether you are a business, marketer, or just someone looking to tidy up your URLs, we provide a quick and efficient solution.
            </p>
            </div>
            
            <div className={`mt-6 mx-auto text-left rounded-xl hover:text-lg border-[1px] border-t-purple-100 px-2 shadow-lg hover:shadow-lg shadow-purple-900 hover:shadow-purple-900`}>
                <p className={`text-2xl font-semibold text-center mb-3 ${poppins.className}`}>How It Works</p>
                <div className={`space-y-[1px]`}>
                <p className="mb-2 font-semibold">
                    Our URL Shortener works by taking your long URL and converting it into a shorter version that's easier to share and remember. 
                    With just a click of a button, you can generate a short link that redirects to the original destination.
                </p>
                <p className="mb-2 font-semibold">
                    It's simple, fast, and most importantly, free! Our platform ensures that your links are safe and private, so you can share with confidence.
                </p>
                </div>
            </div>

            <div className="mt-8 mb-2 flex flex-col items-center rounded-xl hover:text-lg border-[1px] border-t-purple-200 border-purple-100 px-2 shadow-lg hover:shadow-lg shadow-purple-900 hover:shadow-purple-900 text-black p-6 ">
                <p className={`text-2xl font-semibold mb-4 ${poppins.className}`}>Why Use Our Service?</p>
                <ul className="list-disc w-1/2 self-center font-semibold">
                    <li className='flex justify-center items-center'>✔️ Quick & Easy URL shortening process</li>
                    <li className='flex justify-center items-center'>✔️ Free to use with no hidden charges</li>
                    <li className='flex justify-center items-center'>✔️ Simple, intuitive interface for everyone</li>
                    <li className='flex justify-center items-center'>✔️ Secure & Reliable service</li>
                </ul>
            </div>
        </div>
    </section>
    </div>
  )
}

export default about
