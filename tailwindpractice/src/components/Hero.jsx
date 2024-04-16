import React, { useState } from 'react'

import bannerimage1 from "../assets/images/big-shoe1.png"
import bannerimage2 from "../assets/images/big-shoe2.png"
import bannerimage3 from "../assets/images/big-shoe3.png"
import image1 from "../assets/images/thumbnail-shoe1.svg"
import image2 from "../assets/images/thumbnail-shoe2.svg"
import image3 from "../assets/images/thumbnail-shoe3.svg"
import Singleshoecard from './Singleshoecard'


function Hero() {
    const shoe=[
        {thumbnail:image1,
         banner:bannerimage1},
         {thumbnail:image2,
        banner:bannerimage2},
        {thumbnail:image3,
         banner:bannerimage3}
    ]

    const [bannerimage,setBannerimage]=useState(bannerimage2 )
  return (
    <div className='hero flex w-full mx-auto gap-12 xl:flex-row flex-col min-h-screen justify-center relative'>
    
<div className='leftside flex flex-col justify-center items-start z-10'>
    <p className=' text-orange-400 font-serif max-sm:text-lg '>Our Summer Collection</p>
    <h1 className='text-7xl font-bold leading-[80px] '> <span className=' absolute right-2/5 bg-white py-2 ' >The New Arrival</span><br /><span className=' text-orange-400 '>Nike</span> Shoes</h1>
    
    <p className='my-4 text-gray-500 font-serif'>Discover stylish Nike arrivals,quality <br />comfort and innovation for your comfort life</p>
    <div className="button pt-10">
        <button className=' bg-orange-600 rounded-full w-32 p-2 text-white'>Shop now</button>
    </div>
    <div className='flex gap-12 mt-10'>
        <p className=' font-bold text-4xl font-serif'>1k+ <br /><span className=' font-normal text-xl pt-0 line-clamp-none '>brands</span></p>
        <p className=' font-bold text-4xl  font-serif' >500+ <br /><span className=' font-normal text-xl pt-0 line-clamp-none '>shops</span></p>
        <p className=' font-bold text-4xl font-serif' >250k+ <br /><span className=' font-normal text-xl pt-0 line-clamp-none '>customers</span></p>
    </div>
</div>
<div className='rightside z-0 flex justify-center items-center xl:min-h-screen bg-primary bg-hero bg-cover '>
    <img width={640} height={500} className='object-contain' src={bannerimage} alt="" />

  
    <div className='flex absolute -bottom-[5%] gap-4 justify-center items-center z-50 '>
       {shoe.map((sshoe)=>(
        <div key={sshoe} className=' z-40 '>
             <Singleshoecard simage={sshoe} changebannerimage={(sshoe)=>{setBannerimage(sshoe)}} 
             bannerimage={bannerimage} />
            
            </div>
        
       ))}
            {/* <Singleshoecard simage={image1} changebannerimage={()=>{}} currentimage="" />
            <Singleshoecard simage={image2} changebannerimage={()=>{}} currentimage="" />
            <Singleshoecard simage={image3} changebannerimage={()=>{}} currentimage="" /> */}
            
        
        
    </div>
    
</div>
    
    
    </div>
  )
}

export default Hero