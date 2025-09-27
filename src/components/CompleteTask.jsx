import React from 'react'

const CompleteTask = ({item}) => {
    const handelRemove = ()=>{
        console.log(item)
    }
    return (
        <>
            <div class="bg-white p-4 rounded-lg shadow-sm w-full">
                <h3 class="font-bold text-gray-800 text-base mb-1">{item.title}</h3>
                <div class="flex items-center justify-between text-sm text-green-600">
                    <span class="flex items-center gap-1 font-semibold">
                        <i class="ri-check-fill"></i>
                        Completed
                    </span>
                    <span
                        onClick={handelRemove}
                        class="text-gray-400 text-xs cursor-pointer hover:underline"
                    >
                        Click to remove
                    </span>
                </div>
            </div>



        </>
    )
}

export default CompleteTask