import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";



const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-pink-200 to-pink-400 shadow-lg rounded-xl shadow-purple-950">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best URL shortener in the Market
          </p>
          <p className="px-56 text-center text-lg">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-3 justify-start'>
          <Link href="/shorten"><button className='bg-purple-500 shadow-slate-900 rounded-lg shadow-md py-3 px-4 font-bold text-white hover:text-lg hover:shadow-lg hover:bg-purple-800 hover:shadow-slate-900'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 shadow-slate-900 rounded-lg shadow-md py-3 px-4 font-bold text-white hover:text-lg hover:shadow-lg hover:bg-purple-800 hover:shadow-slate-900'>GitHub</button></Link>
        </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true}    />
        </div>

      </section>
    </main>
  );
}