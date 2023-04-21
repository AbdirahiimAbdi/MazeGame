import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

import Map from '../../data/maze.json'
import MainMenu from '../components/MainMenu/MainMenu.js'
import Maze from '../components/Maze/Maze.js'
import End from '../components/End/End.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    // Declaration of pageType state which will affect what will be shown on the page
    const [pageType, setPageType] = useState('menu')
    // wealth state created so that it can be shown on both the maze page and the end page
    const [wealth, setWealth] = useState(0)
    // maze state declared as imported maze.json
    const [maze, setMaze] = useState(Map)
    // Current room of which the user is in
    const [currentRoom, setCurrentRoom] = useState(getRandomInt(maze.length - 1))

    return (
        <main className="flex items-center justify-center p-24">
            {pageType == 'menu' && <MainMenu setPageType={setPageType} />}
            {pageType == 'maze' && (
                <Maze
                    wealth={wealth}
                    maze={maze}
                    setWealth={setWealth}
                    currentRoom={currentRoom}
                    setCurrentRoom={setCurrentRoom}
                    setPageType={setPageType}
                    pageType={pageType}
                />
            )}
            {pageType == 'end' && <End wealth={wealth} />}
        </main>
    )
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}
