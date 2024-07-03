"use client"
import React, { useState } from 'react'
import Select from './select'
import { usePathFinding } from '@/hooks/usePathfinding'
import { MAZES } from '@/utils/constants'
import { MazeType } from '@/utils/types'
import { resetGrid } from '@/utils/reset-grid'
import { useTile } from '@/hooks/useTile'
import { runMazeAlgorithm } from '@/utils/run-maze-algorithm'
import { useSpeed } from '@/hooks/useSpeed'
import { Maximize2Icon } from 'lucide-react'
import { GiMaze } from 'react-icons/gi'

type Props = {}

const Nav = (props: Props) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const { maze, setMaze, grid, setGrid, setIsGraphVisualized } = usePathFinding();
  const { startTile, endTile } = useTile();
  const { speed } = useSpeed();

  const handleGenerateMaze = (maze: MazeType) => {
    if(maze === "NONE") {
      setMaze(maze)
      resetGrid({ grid, startTile, endTile })
      return
    }
    
    setMaze(maze) 
    setIsDisabled(true)
    runMazeAlgorithm({ maze, grid, startTile, endTile, setIsDisabled, speed });

    const newGrid = grid.slice();
    setGrid(newGrid)
    setIsGraphVisualized(false)
  }

  return (
    <div className="flex items-center justify-center gap-4 min-h-[4.5rem] border-b sm:px-5 px-0">
      <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
        <div className='flex gap-4 items-center p-3'>
          <GiMaze className='w-24 h-24'/>
          <h1 className="lg:flex hidden w-[40%] text-2xl pl-1 text-primary italic font-light tracking-wider">Maze generator</h1>
        </div>
        <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
          <Select 
            label='Maze'
            value={maze}
            options={MAZES}
            onChange={(e) => handleGenerateMaze(e.target.value as MazeType)}
          />
        </div>
      </div>
    </div>
  )
}

export default Nav