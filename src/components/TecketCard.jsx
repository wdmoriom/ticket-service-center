import React from 'react'

const priorityClass = {
    MEDIUM: 'text-yellow-500',
    LOW: 'text-green-500',
    HIGH: 'text-red-500'

}

const TecketCard = ({ ticket,setResolved,resolved }) => {
    const handelInprogress =(id)=>{
        const exists = resolved.find(t => t.id === id)
        if(exists) return 
        ticket.status = 'In-Progress'
        setResolved((prev)=>{
            return [...prev, ticket]
        })
    }
     
    return (
        <>
            <div className=" bg-white p-4 rounded-xl shadow-lg border border-gray-100" onClick={()=>handelInprogress(ticket.id)}>
                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg font-semibold text-gray-800">{ticket.title}</h2>

                    <span className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full ${ticket.status === "Open" ? 'bg-green-100 text-green-700': 'bg-yellow-200 text-yellow-600'}`}>
                        <svg className="w-2.5 h-2.5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" />
                        </svg>
                        {ticket.status}
                    </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {ticket.description}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center space-x-2">
                        <span className="font-medium">#{ticket.id}</span>

                        <span className={`font-bold ${priorityClass[ticket.priority]} uppercase `}>{ticket.priority} PRIORITY</span>
                    </div>

                    <div class="flex items-center space-x-3">
                        <span>{ticket.customer}</span>

                        <div class="flex items-center">
                            <svg class="w-4 h-4 mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>{ticket.createdAt}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TecketCard