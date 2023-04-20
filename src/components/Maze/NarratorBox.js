export default function NarratorBox({ narration }) {
    return (
        <div className="flex flex-col items-start justify-center absolute bottom-0 left-0 h-[90px] w-[260px] py-[10px] px-[14px] gap-1 bg-[#433A3A] border-t border-r border-[#E56969] rounded-tr-sm drop-shadow-2xl" >
            <span className="text-xs text-[#E56969]">{narration.title}</span>
            <span className="text-xs text-[#D9C480]">{narration.line1}</span>
            <span className="text-xs text-[#D9C480]">{narration.line2}</span>
        </div>
    )
}