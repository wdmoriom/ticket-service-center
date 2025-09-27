import React from 'react'
import TecketCard from './TecketCard'
import Status from './Status'

const Ticket = ({ tickets, setResolved, resolved,isComplete,setIsComplete,setTickets }) => {
    return (
        <>
            <h1 className='mt-20 font-bold text-xl'>Customer Ticket</h1>


            <div className="grid grid-cols-12 mt-5">
                <div className="col-span-9">
                    <div className="grid grid-cols-2 gap-5">
                        {
                            tickets.map(ticket => <TecketCard key={ticket.id} ticket={ticket} setResolved={setResolved} resolved={resolved} />)
                        }
                    </div>
                </div>

                <div className="col-span-3">
                    <Status setTickets={setTickets} tickets={tickets} setResolved={setResolved} resolved={resolved} isComplete={isComplete} setIsComplete={setIsComplete}/>
                </div>
            </div>
        </>
    )
}

export default Ticket