import React from 'react'

function Singleshoecard({simage,changebannerimage,currentimage}) {
  return (
    <>
        <div className={`border-2 rounded-xl 
        ${currentimage===simage?'border-coral-red':'border-transparent'} cursor-pointer max-sm:flex-1 bg-slate-300 gap-4
        `}>
            <img src={simage} alt="" />
        </div>



    </>
  )
}

export default Singleshoecard