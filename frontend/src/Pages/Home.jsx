import React from 'react'

const Home = () => {
  return (
    <div>
      <div className=' bg-[url("/trafficLight.jpg")]h-screen pt-8 flex justify-between flex-col w-full bg-indigo-400'>
        <img className='w-16 ml-8' src="/Uber_logo_2018.png" alt="Uber Logo" />
        <div className='bg-white pb-7 py-4 px-4 flex flex-col gap-5'>
          <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
          <button className='w-full bg-black text-white py-3 rounded-md hover:bg-gray-800'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Home
