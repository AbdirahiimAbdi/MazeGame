export default function ActionBox({ action, setAction, setWealth, room, setNarratorType }) {
    if (action == null) return null

    const handleAbility = (e) => {
        switch (action.threat) {
            case 'THE ONE-EYE':
                if (e.target.innerText == 'CLUB') {
                    setNarratorType({
                        title: action.threat.type,
                        line1: `You defeated a One-Eye...`,
                        line2: 'Onto the next!',
                    })
                    delete room.items.threats[action.index]
                    setAction(null)
                }
                break
            case 'VAMP':
                if (e.target.innerText == 'WHACK') {
                    setNarratorType({
                        title: action.threat.type,
                        line1: `You defeated a Vamp...`,
                        line2: 'Onto the next!',
                    })
                    delete room.items.threats[action.index]
                    setAction(null)
                }
                break
            case 'DRAGON':
                if (e.target.innerText == 'SMACK') {
                    setNarratorType({
                        title: action.threat.type,
                        line1: `You defeated a Dragon...`,
                        line2: 'Onto the next!',
                    })
                    delete room.items.threats[action.index]
                    setAction(null)
                }
                break
            case 'ALIEN':
                if (e.target.innerText == 'SLAM') {
                    setNarratorType({
                        title: action.threat.type,
                        line1: `You defeated a Alien...`,
                        line2: 'Onto the next!',
                    })
                    delete room.items.threats[action.index]
                    setAction(null)
                }
                break
        }
    }

    const handleAction = (e) => {
        if (e.target.innerText == 'Yes') {
            setNarratorType({
                title: 'Coin deposited!',
                line1: `Let's move to the next room`,
                line2: null,
            })
            setWealth((wealth) => wealth - 1)
            room.items.treasure.push({ name: 'deposit', value: 1 })
            setAction(null)
        } else if (e.target.innerText == 'No') {
            setAction(null)
            setNarratorType({
                title: 'Nice',
                line1: `Looks like there's no threats in this room.`,
                line2: `Let's move on.`,
            })
            setAction(null)
        }
    }

    return (
        <div className="flex flex-col items-start justify-center absolute bottom-0 right-0 h-[90px] w-[260px] py-[10px] px-[14px] gap-1 bg-[#433A3A] border-t border-l border-[#E56969] rounded-tr-sm drop-shadow-2xl">
            <span className="text-xs text-[#55ADD9]">{action.mode == 'fight' ? 'Abilites' : 'Choose Yes or No'}</span>
            {action.mode == 'fight' && (
                <div className="grid grid-cols-2 gap-y-[10px] gap-x-[30px]">
                    <div
                        className="flex items-center justify-center w-[100px] h-[20px] bg-[#3E5059] hover:bg-[#D9C480] hover:cursor-pointer rounded"
                        onClick={handleAbility}
                    >
                        <span className="text-[#55ADD9] text-xs text-[#D9C480]">CLUB</span>
                    </div>
                    <div
                        className="flex items-center justify-center w-[100px] h-[20px] bg-[#3E5059] hover:bg-[#D9C480] hover:cursor-pointer rounded"
                        onClick={handleAbility}
                    >
                        <span className="text-[#55ADD9] text-xs text-[#D9C480]">WHACK</span>
                    </div>
                    <div
                        className="flex items-center justify-center w-[100px] h-[20px] bg-[#3E5059] hover:bg-[#D9C480] hover:cursor-pointer rounded"
                        onClick={handleAbility}
                    >
                        <span className="text-[#55ADD9] text-xs text-[#D9C480]">SMACK</span>
                    </div>
                    <div
                        className="flex items-center justify-center w-[100px] h-[20px] bg-[#3E5059] hover:bg-[#D9C480] hover:cursor-pointer rounded"
                        onClick={handleAbility}
                    >
                        <span className="text-[#55ADD9] text-xs text-[#D9C480]">SLAM</span>
                    </div>
                </div>
            )}
            {action.mode == 'deposit' && (
                <div className="grid grid-cols-2 gap-y-[10px] gap-x-[30px]">
                    <div
                        className="flex items-center justify-center w-[100px] h-[20px] bg-[#3E5059] hover:bg-[#D9C480] hover:cursor-pointer rounded"
                        onClick={handleAction}
                    >
                        <span className="text-[#55ADD9] text-xs text-[#D9C480]">Yes</span>
                    </div>
                    <div
                        className="flex items-center justify-center w-[100px] h-[20px] bg-[#3E5059] hover:bg-[#D9C480] hover:cursor-pointer rounded"
                        onClick={handleAction}
                    >
                        <span className="text-[#55ADD9] text-xs text-[#D9C480]">No</span>
                    </div>
                </div>
            )}
        </div>
    )
}
