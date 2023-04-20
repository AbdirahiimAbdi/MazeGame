import Wealth from './Wealth'
import Passage from './Passage'
import NarratorBox from './NarratorBox'
import ActionBox from './ActionBox'
import Threat from './Threat'
import Treasure from './Treasure'
import { useState, useEffect } from 'react'

export default function Maze({ wealth, maze, setWealth, currentRoom, setCurrentRoom, setPageType }) {
    const [narratorType, setNarratorType] = useState(null)
    const [action, setAction] = useState(null)
    const [allow, setAllow] = useState(false)

    // Show NarratorBox when player removes all threats
    useEffect(() => {
        setTimeout(() => {
            if (!maze[currentRoom].threatsCleared) {
                if (document.getElementById('threats')?.childElementCount === 0) {
                    maze[currentRoom].threatsCleared = true
                    setAllow(document.getElementById('threats').childElementCount === 0)
                    setNarratorType({
                        title: 'Nice',
                        line1: `Looks like there's no threats in this room.`,
                        line2: `Let's move on.`,
                    })
                }
            }
        }, 2000)
    }, [narratorType])

    // Show NarratorBox when player enters a new room
    useEffect(() => {
        setAllow(document.getElementById('threats')?.childElementCount === 0)
        if (!maze[currentRoom].threatsCleared) {
            setNarratorType({
                title: 'New Room',
                line1: 'You’ve entered a new room.',
                line2: 'What will you do?',
            })
        }
        setAction(null)
    }, [currentRoom])

    return (
        <div className="relative flex flex-col items-center justify-center h-[500px] w-[800px] bg-[#546E7A]">
            <Wealth wealth={wealth} />
            {maze[currentRoom].passages.map((passage, index) => {
                return (
                    <Passage
                        key={index}
                        isExit={passage.isExit}
                        direction={passage.direction}
                        setCurrentRoom={setCurrentRoom}
                        allow={allow}
                        setPageType={setPageType}
                    />
                )
            })}
            <div id="treasure" className="flex items-center justify-center gap-8 w-[500px] absolute top-16">
                {maze[currentRoom].items.treasure.map((treasure, index) => {
                    return (
                        <Treasure
                            key={index}
                            index={index}
                            treasure={treasure}
                            setAction={setAction}
                            setNarratorType={setNarratorType}
                            room={maze[currentRoom]}
                            setWealth={setWealth}
                            allow={allow}
                        />
                    )
                })}
            </div>
            <div id="threats" className="flex items-center justify-center gap-32 w-[500px] absolute bottom-1/2">
                {maze[currentRoom].items.threats.map((threat, index) => {
                    return (
                        <Threat
                            key={index}
                            index={index}
                            threat={threat}
                            setAction={setAction}
                            setNarratorType={setNarratorType}
                        />
                    )
                })}
            </div>
            <img src="/Player.png" alt="Player" className="absolute bottom-16" />
            {narratorType && <NarratorBox narration={narratorType} />}
            {action && (
                <ActionBox
                    action={action}
                    setAction={setAction}
                    room={maze[currentRoom]}
                    setNarratorType={setNarratorType}
                    setWealth={setWealth}
                />
            )}
        </div>
    )
}
