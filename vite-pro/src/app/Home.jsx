import React from 'react'
import About from './About'

 function Home() {
  return (
    <>
    <div>
    <div className='relative grid justify-center items-end text-center  h-screen w-screen '>
     <div className='absolute'>
      <img className=' h-screen w-screen  ' src="https://preview.colorlib.com/theme/feliciano/images/bg_3.jpg.webp" alt="" />
      </div>
      <div className='absolute  pt-4  bg-black bg-opacity-50 w-screen h-screen flex justify-center items-center flex-col'> 
      <div className=' w-screen h-96 flex justify-center items-center flex-col gap-5' >
        <h1 className='font-serif text-7xl text-[#c8a97e]'>Feliciano</h1>
        <h2 className=' text-white text-7xl font-semibold'>BEST RESTURANT</h2>
      </div>
      <div className=' flex gap-36 text-lg w-screen  text-white pl-14 '>
      <div className='h-52 w-72 gap-4 flex justify-center items-center flex-col'> 
        <img className='rounded-full h-28 w-28' src="https://preview.colorlib.com/theme/feliciano/images/breakfast-1.jpg.webp" alt="" />
        <p className=' text-2xl'>Grilled Beef With Potatoes</p>
        <p className=' text-xl'>Meat,Potatoes,Rice,Tomatoes</p>
      </div>
      <div className='  h-52 w-72 gap-4 flex justify-center items-center flex-col'> 
        <img className='rounded-full h-28 w-28' src="https://preview.colorlib.com/theme/feliciano/images/breakfast-2.jpg.webp" alt="" />
        <p className=' text-2xl'>Grilled Beef With Potatoes</p>
        <p className='text-xl'>Meat,Potatoes,Rice,Tomatoes</p>
      </div>
      <div className='h-52 w-72 gap-4 flex justify-center items-center flex-col '> 
        <img className='rounded-full h-28 w-28' src="https://preview.colorlib.com/theme/feliciano/images/breakfast-3.jpg" alt="" />
        <p className=' text-2xl'>Grilled Beef With Potatoes</p>
        <p className='text-xl'>Meat,Potatoes,Rice,Tomatoes</p>
      </div>
      <div className='h-52 w-72 gap-4 flex justify-center items-center flex-col '> 
        <img className='rounded-full h-28 w-28' src="https://preview.colorlib.com/theme/feliciano/images/breakfast-4.jpg" alt="" />
        <p className=' text-2xl'>Grilled Beef With Potatoes</p>
        <p className='text-xl'>Meat,Potatoes,Rice,Tomatoes</p>
      </div>
      </div>
      </div>
    </div>
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
    </div>
    <About/>
    </>
  )
}

export default Home
