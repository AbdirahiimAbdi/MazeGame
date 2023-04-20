import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

import Map from '../../data/maze.json'
import MainMenu from '../components/MainMenu/MainMenu.js'
import Maze from '../components/Maze/Maze.js'
import End from '../components/End/End.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [pageType, setPageType] = useState('menu')
    const [wealth, setWealth] = useState(0)
    const [maze, setMaze] = useState(Map)
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
