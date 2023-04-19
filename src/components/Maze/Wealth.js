export default function Wealth({ wealth }) {
    return (
        <div className="absolute top-0 left-0 flex items-center justify-center h-6 w-28 bg-[#433A3A] rounded-br-md">
            <span className="text-xs text-[#D9C480]">${wealth}</span>
        </div>
    )
}
