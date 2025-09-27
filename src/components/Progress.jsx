import React from 'react'

import img from '../assets/vector1.png'

const Progress = ({resolved,isComplete}) => {
  return (
    <>
    
    <div className="flex mt-20">
    <div className="text-2xl text-center flex  items-center justify-between w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-60">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="">
                <h1>In-Progress</h1>
            <p>{resolved.length}</p>
            </div>
            <div className="">
                <img src={img} alt="" className='transform scale-x-[-1]'/>
            </div>
        </div>
        <div className="text-2xl text-center flex  items-center justify-between w-full bg-gradient-to-r from-[#54CF68] to-[#00827A] h-60">
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="">
                <h1>In-Progress</h1>
            <p>{isComplete.length}</p>
            </div>
            <div className="">
                <img src={img} alt="" className='transform scale-x-[-1]'/>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Progress