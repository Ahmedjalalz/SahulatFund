import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { Button } from "./ui/button";


function Hero() {
  return (
    // <section className='w-screen h-screen bg-cover bg-center flex flex-col gap-2 items-center justify-center' style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/bg4.png')", }}>

    //   <div className='flex items-center justify-center rounded-full gap-2 py-1 px-4 bg-[#27ffa549] border-2 border-[hsl(155,100%,45%)]' >
    //     <FaHeart className='fill-[hsl(155,100%,60%)]'/>
    //     <p className=' text-lg text-[hsl(155,100%,60%)]'>Every Rupee Counts. Everyone Matters.</p>
    //   </div>
    //   <h1 className='text-6xl font-bold bg-gradient-to-r from-[hsl(178,100%,60%)] to-[hsl(155,100%,45%)] bg-clip-text text-transparent py-2'>Hope & Healing</h1>
    //   <h2 className='text-6xl font-bold text-white' >For Those Who Need It Most</h2>
    //   <p className='text-lg leading-relaxed max-w-2xl text-center text-white mt-2'>
    //     SahulatFund connects generous hearts with people in urgent needs across Pakistan.
    //     Support verified campaigns, track your impact in real-time,
    //     and help save lives with trusted local payments.
    //     {/* SahulatFund connects generous hearts with people in need */}
    //   </p>

    //   <div className="buttons flex gap-2 mt-4">
    //     <button className='px-3 py-2 font-medium bg-amber-50 text-black rounded-md'>Explore Campaigns</button>
    //     <button className='px-3 py-2 font-medium bg-gradient-to-r from-[#32CBC6] to-[#29BF80] text-white rounded-md'>Start a Campaign</button>
    //   </div>

    // </section>

    <section className='h-screen flex px-10 md:px-20'>"

      <div className="left flex-1 h-full flex justify-center items-center">
        <div className="container flex gap-6 flex-col mt-16 bg-">
          <div>

            <div className='flex items-center justify-center rounded-full gap-2 py-1 px-4 w-fit bg-[#27ffa515] border-1 border-[var(--color-primary)]' >
              <FaHeart className='text-md fill-[var(--color-primary)]' />
              <p className=' text-sm text-[var(--color-primary)]'>Every Rupee Counts. Everyone Matters.</p>
            </div>

            <h1 className='text-6xl font-bold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent py-2'>Hope & Healing</h1>
            <h2 className='text-6xl font-bold w-[80%]' >For Those Who Need It Most</h2>
          </div>
          <p className='text-lg leading-relaxed max-w-2xl mt-2 w-[80%]'>
            SahulatFund connects generous hearts with people in urgent needs across Pakistan.
            Support verified campaigns, track your impact in real-time,
            and help save lives with trusted local payments.
            {/* SahulatFund connects generous hearts with people in need */}
          </p>
          <div className="flex gap-3">
            <Button
              size="lg"
              variant="outline"
              className="border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition"
            >
              Browse Campaigns
            </Button>

            <Button
              size="lg"
              className="text-md bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white hover:opacity-90 transition"
            >
              Start Campaign
            </Button>

          </div >
            {/* Stats  */}
          <div className="stats flex justify-center gap-6 py-6 border-2 border-gray-300 shadow-lg rounded-lg w-[80%]">

            <div className="first flex flex-1 flex-col items-center justify-center px-6">
              <p className='text-3xl font-bold text-[#28BD78]'>₨50M+</p>
              <h2 className='text-sm text-gray-600'>Funds Raised</h2>
            </div>
            <div className="first  flex flex-1  flex-col items-center justify-center px-6 border-r-1 border-l-1 border-gray-300" >
              <p className='text-3xl font-bold text-[#EEBA38]'>12K+</p>
              <h2 className='text-sm text-gray-600'>Lives Helped</h2>
            </div>
            <div className="first  flex flex-1  flex-col items-center justify-center px-6">
              <p className='text-3xl font-bold text-[#2081DE]'>98%</p>
              <h2 className='text-sm text-gray-600'>Verified</h2>
            </div>

          </div>
        

        </div>

      </div>

      <div className="right h-full w-auto flex-1 pt-24 py-8 flex items-center justify-center">
        <img src="/bg4.png" alt="" className='h-full w-auto object-cover rounded-2xl text-center shadow-lg shadow-[#0000004d]' />
      </div>

    </section>
  )
}

export default Hero
