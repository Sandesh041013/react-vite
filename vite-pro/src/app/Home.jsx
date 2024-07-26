import React from 'react'
import About from './About'
import Designone from '../components/UI/Designone'


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

    </div>
   

  <Designone/>
    </>
  )
}

export default Home
