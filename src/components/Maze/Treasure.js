export default function Treasure({ index, treasure, setAction, setNarratorType, room, setWealth, allow }) {
    const deleteTreasure = (index) => {
        delete room.items.treasure[index]
        setAction(null)
    }

    return (
        <img
            className="hover:cursor-pointer"
            key={index}
            src={treasure.name === 'money' ? '/Treasure.png' : '/Deposited Coin.png'}
            alt={treasure.name === 'money' ? 'Treasure' : 'Deposited Coin'}
            onClick={() => {
                if (allow) {
                    deleteTreasure(index)
                    if (treasure.name === 'money') {
                        setWealth((wealth) => parseInt(wealth + treasure.value))
                        setAction({
                            treasure: treasure,
                            mode: 'deposit',
                            index: index,
                        })
                        setNarratorType({
                            title: 'Deposit?',
                            line1: `Would you like to deposit treasure?`,
                            line2: null,
                        })
                    } else {
                        setWealth((wealth) => parseInt(wealth + 1))
                    }
                }
            }}
        />
    )
}
