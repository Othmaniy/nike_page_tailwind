import React from 'react'
import Productlisting from './Productlisting'

import shoe4 from "../assets/images/shoe4.svg"
import shoe5 from "../assets/images/shoe5.svg"
import shoe6 from "../assets/images/shoe6.svg"
import shoe7 from "../assets/images/shoe7.svg"

function Popularpructs() {
  return (
    <div className=' mt-40 -z-40 justify-start'>
        <h2 className=' text-4xl'>Our <span className=' text-coral-red'>popular</span> products</h2>
        <p className='mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugit rerum eius quia aspernatur ipsum 
        </p>

         <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-0'>
            <Productlisting 
             img={shoe4}
             star={'star'}
             title={'jordan 4'}
             price={"200 $"}
            />
              <Productlisting 
             img={shoe5}
             star={'star(4,5)'}
             title={"air jordan"}
             price={"200 $"}
            />
              <Productlisting 
             img={shoe6}
             star={"star (4,5"}
             title={"air force"}
             price={"200 $"}
            />
              <Productlisting 
             img={shoe7}
             star={'star(4,5)'}
             title={"niked air wolf"}
             price={"200 $"}
            />
         </div>
    </div>
  )
}

export default Popularpructs