import React from 'react'

function Singleshoecard({simage,changebannerimage,bannerimage}) {


  const handleClick =()=>{
    if(bannerimage!==simage.banner){
      changebannerimage(simage.banner)
    }
  }
// console.log(simage.banner);
  return (
    <>
        <div className={`border-2 rounded-xl 
        ${bannerimage===simage.banner?'border-coral-red':'border-transparent'}  max-sm:flex-1 bg-card bg-cover  flex justify-center items-center p-3 
        `}
     
        >
            <img src={simage.thumbnail} alt="thumbnail image" 
            width={127}
            height={103}
            className=' object-contain cursor-pointer'

            onClick={handleClick}
            
            />
        </div>


    </>
  )
}

export default Singleshoecard