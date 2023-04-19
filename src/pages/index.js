import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

import { map } from '../../data/maze.json'
import MainMenu from '../components/MainMenu/MainMenu.js'
import Maze from '../components/Maze/Maze.js'
import End from '../components/End/End.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [pageType, setPageType] = useState('menu')

    const [gameState, setGameState] = useState({
        wealth: 0,
        maze: map,
    })

    return (
        <main className="flex items-center justify-center p-24">
            {pageType == 'menu' && <MainMenu setPageType={setPageType} />}
            {pageType == 'maze' && (
                <Maze
                    setGameState={setGameState}
                    gameState={gameState}
                    wealth={gameState.wealth}
                    maze={gameState.maze}
                />
            )}
            {pageType == 'end' && <End setGameState={setGameState} gameState={gameState} wealth={gameState.wealth} />}
        </main>
    )
}
