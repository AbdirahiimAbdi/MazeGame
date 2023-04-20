import Wealth from './Wealth'
import Passage from './Passage'

export default function Room({ wealth, room }) {
    console.log(room)
    return (
        <div className="relative flex flex-col items-center justify-center h-[500px] w-[800px] bg-[#546E7A]" >
            <Wealth wealth={wealth} />
            {room.passages.map((passage, index) => {
                return (
                    <Passage key={index} isExit={passage.isExit} direction={passage.direction} />
                )
            })
            }
            <h1>maze</h1>
        </div>
    )
}