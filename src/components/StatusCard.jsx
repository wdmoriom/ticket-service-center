import React from 'react'

const StatusCard = ({item,setIsComplete,resolved,setResolved,setTickets,tickets}) => {
    const handelComplete = (id)=>{
        const findData = resolved.find(item => item.id === id)
        const newFilteredData = resolved.filter(item => item.id !== id)
        const newResolved = tickets.filter(item => item.id !== id )
        setResolved(newFilteredData)
        setTickets(newResolved)
        setIsComplete((prev)=> [...prev, findData])
    }
    return (
        <>
            <div class="max-w-md bg-white p-4 mb-4 rounded-xl shadow-lg border border-gray-100">
                <h3 class="text-base font-semibold text-gray-800 mb-3">{item.title}</h3>
                <button class="w-full py-2 px-4 text-white font-medium rounded-lg bg-green-600 hover:bg-green-700 transition duration-150" onClick={()=>handelComplete(item.id)}>
                    Complete
                </button>
            </div>
        </>
    )
}

export default StatusCard