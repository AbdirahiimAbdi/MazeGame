import Wealth from './Wealth'

export default function Maze({ gameState, setGameState }) {
    return (
        <div className="relative flex flex-col items-center justify-center h-[500px] w-[800px] bg-[#546E7A]">
            <Wealth wealth={gameState.wealth} />
            <h1>Maze</h1>
        </div>
    )
}
