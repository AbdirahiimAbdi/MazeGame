import { useRouter } from 'next/router'

export default function End({ wealth }) {
    const router = useRouter()

    return (
        <div className="relative flex flex-col items-center justify-center h-[500px] w-[800px] bg-[#D9C480]">
            <div className="flex flex-col items-center justify-center absolute bottom-1/2 h-[90px] w-[260px] py-[10px] px-[14px] gap-1 bg-[#433A3A] border border-[#E56969] rounded-tr-sm drop-shadow-2xl">
                <span className="text-xs text-[#E56969]">CONGRATUALTIONS!</span>
                <span className="text-xs text-[#D9C480]">You’ve finished with a total of:</span>
                <span className="text-base text-[#D9C480]">${wealth}</span>
            </div>
            <img src="/Player.png" alt="Player" className="absolute bottom-16" />
            <div className="absolute bottom-0 h-[30px] w-[100px] bg-[#433A3A]"></div>
            <span
                className="absolute bottom-6 right-6 text-[#E56969] hover:text-[#433A3A] hover:cursor-pointer"
                onClick={() => router.reload()}
            >
                Restart
            </span>
        </div>
    )
}
