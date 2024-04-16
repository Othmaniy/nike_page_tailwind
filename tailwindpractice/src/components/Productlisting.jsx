import React from 'react'

function Productlisting({img,star,title,price}) {
  return (
    <div className='flex flex-1 flex-col   items-start max-sm:items-center mt-12'>
        <div>
        <img src={img} alt="product" width={280} height={280} className=' object-contain' />
     <span>{star}</span>
     <p className=' font-bold font-serif'>{title}</p>
     <p className=' text-coral-red'>{price}</p>
        </div>
    


    </div>
  )
}

export default Productlisting