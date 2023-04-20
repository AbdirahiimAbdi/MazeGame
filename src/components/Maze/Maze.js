import Room from './Room'
import { useState, useEffect } from 'react'

export default function Maze({ wealth, currentRoom, maze }) {

    return (
        <Room wealth={wealth} room={maze[currentRoom]} />
    )
}

