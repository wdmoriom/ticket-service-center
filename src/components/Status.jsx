
import StatusCard from './StatusCard'
import CompleteTask from './CompleteTask'

const Status = ({ setResolved, resolved, setIsComplete, isComplete, setTickets, tickets }) => {

    return (
        <>
            <div className="p-6 bg-gray-50 min-h-screen">

                <h1 className="text-2xl font-bold text-gray-800 mb-6">Task Status</h1>

                {
                    resolved.map(item => <StatusCard key={item.id} tickets=
                        {tickets} item={item} setIsComplete={setIsComplete} setResolved={setResolved} isComplete={isComplete} resolved={resolved} setTickets={setTickets} />)
                }



                {
                    isComplete.length > 0 && (<div className="">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Resolved Task</h2>
                        <p class="text-gray-500">No resolved tasks yet.</p>

                        {
                            isComplete.map(item => <CompleteTask key={item.id} item={item} />)
                        }
                    </div>)
                }

            </div>

        </>
    )
}

export default Status