import React from 'react'

function Designone() {
  return (
    <div className='flex   justify-center items-center h-screen w-screen '>
    <div className='flex gap-5   h-screen '>
      <div className=' h-3/4 w-96  mt-20 '>
        <img className='size-full object-cover' src="https://preview.colorlib.com/theme/feliciano/images/about.jpg" alt="" />
   
      </div>
      <div className=' h-3/4 w-96 bg-cover  mt-32'>
        <img className='size-full object-cover' src="https://preview.colorlib.com/theme/feliciano/images/about-1.jpg" alt="" />
      </div>
    </div>
    <div className=' pl-8 w-2/6 h-5/6'>
<h1 className='text-8xl text-[#c8a97e] font-sans absolute pt-10 '>about</h1>
<h2 className='text-7xl font-semibold  absolute pt-24 text-[#333333]'>Feliciano</h2>
<h2 className='text-7xl font-semibold  pt-40 text-[#333333]'>Restaurant</h2>
<div className=' w-full text-2xl text-gray-500 pt-8 font-sans space-y-4 '> A small river named Duden flows by their place and supplies it with the necessary regelialia. it is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
<div className='flex gap-2 pt-6'>
<p className='text-2xl text-gray-500'> Mon-Fri </p>
<p className='text-2xl font-bold text-gray-500'> 8 AM-11 PM</p>
</div>
<div className='text-5xl text-[#c8a97e] font-bold pt-6'>+1-978-123-4567</div>


    </div>
  </div>
  )
}

export default Designone
