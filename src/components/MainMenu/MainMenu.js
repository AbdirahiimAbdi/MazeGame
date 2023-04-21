export default function MainMenu({ setPageType, pageType }) {
    return (
        <div className="flex flex-col items-center justify-center h-[500px] w-[800px] bg-[#D9C480]">
            <span className="text-[64px] text-[#E56969]">Maze Game</span>
            <span
                className="text-base text-[#E56969] hover:text-[#433A3A] hover:cursor-pointer"
                onClick={() => {
                    // When clicked the maze page will show
                    setPageType('maze')
                }}
            >
                Start game
            </span>
        </div>
    )
}
