import React, { useEffect, useState } from 'react'
import Progress from './Progress'
import Ticket from './Ticket'
 




const Index = () => {
    const [tickets, setTickets] = useState([])
    const [resolved, setResolved] = useState([])
    const [isComplete, setIsComplete] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('./db.json')
            const data = await res.json()
            setTickets(data)

        }
        fetchData()
    }, [])


    return (
        <>

            <div className="navbar bg-base-100 shadow-sm container mx-auto h-20 flex justify-between  items-center p-10">
                <div className="navbar-start">

                    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
                </div>
                <div className=''>
                    <div className="navbar-center hidden lg:flex items-center  gap-5">
                        <ul className="menu menu-horizontal px-1 flex gap-5 ">
                            <li><a>Home</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Changelog</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Download</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                        <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg w-30 h-8 text-center "> + New Ticket</a>
                    </div>
                </div>
            </div>


            <div className="container mx-auto">
                <Progress resolved={resolved} isComplete={isComplete} />

                <Ticket setTickets={setTickets} tickets={tickets} resolved={resolved} setResolved={setResolved} setIsComplete={setIsComplete} isComplete={isComplete} />
            </div>


          <div className='items-center  border-2 h-100 bg-black'>
            <div className='flex  container mx-auto mt-20 justify-around items-center text-white'>
              <div>
               <h2 className='font-bold text-2xl'>CS — Ticket System</h2>
               <p className='text-[#A1A1AA]'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an <br /> unknown printer took a galley of type and <br /> scrambled it to make a type specimen book.</p>
            </div>
            <ul>
                <li className='font-bold'>Company</li>
                <li className='text-[#A1A1AA]'>About Us</li>
                <li className='text-[#A1A1AA]'>Our Mission</li>
                <li className='text-[#A1A1AA]'>Contact Saled</li>
            </ul>
             <ul>
                <li className='font-bold'>Services</li>
                <li className='text-[#A1A1AA]'>Products & Services</li>
                <li className='text-[#A1A1AA]'>Customer Stories</li>
                <li className='text-[#A1A1AA]'>Download Apps</li>
            </ul>
             <ul>
                <li className='font-bold'>Information</li>
                <li className='text-[#A1A1AA]'>Privacy Policy</li>
                <li className='text-[#A1A1AA]'>Terms & Conditions</li>
                <li className='text-[#A1A1AA]'>Join Us</li>
            </ul>
             <ul>
                <li className='font-bold'>Social Links</li>
                <li className='text-[#A1A1AA]'><i class="ri-twitter-x-line"></i>@CS — Ticket System</li>
                <li className='text-[#A1A1AA]'>@CS — Ticket System</li>
                <li className='text-[#A1A1AA]'>@CS — Ticket System</li>
                <li className='text-[#A1A1AA]'><i class="ri-facebook-circle-fill"></i>@CS — Ticket System</li>
                <li className='text-[#A1A1AA]'>support@cst.com</li>
            </ul> 
           

          </div>
         
           <div>
                <h3 className='text-white mx-auto mt-20 text-center'>© 2025 CS — Ticket System. All rights reserved.</h3>
            </div>
          </div>
        </>
    )
}

export default Index