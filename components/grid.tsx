"use client"
import { usePathFinding } from '@/hooks/usePathfinding'
import { MAX_COLS, MAX_ROWS } from '@/utils/constants'
import React, { MutableRefObject, useContext, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Tile from './tile'
import { checkIfStartOrEnd, createNewGrid } from '@/utils/helpers'

const Grid = ({ isVisualizationRunningRef } : { isVisualizationRunningRef: MutableRefObject<boolean>} ) => {

  const { grid, setGrid } = usePathFinding()
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (row: number, col: number) => {
    if(isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }
    setIsMouseDown(true)
    const newGrid = createNewGrid(grid, row, col);
    setGrid(newGrid)
  }

  const handleMouseUp = (row: number, col: number) => {
    if(isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return
    }
    setIsMouseDown(false)
  }

  const handleMouseEnter = (row: number, col: number) => {
    if(isVisualizationRunningRef.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    if(isMouseDown) {
      const newGrid = createNewGrid(grid, row, col);
      setGrid(newGrid)
    }
  }



  return (
    <div className={twMerge(
      "flex flex-col items-center justify-center mt-4",
      `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
      `lg:min-w-[${MAX_COLS * 17}px] md:min-w-[${MAX_COLS * 15}px] xs:min-w-[${MAX_COLS * 8}px] min-w-[${MAX_COLS * 7}px]`,
    )}>
      {grid.map((r, rowIndex) => (
        <div key={rowIndex} className='flex'>
          {r.map((tile, tileIndex) => {
            const { row, col, isStart, isEnd, isPath, isTraversed, isWall } = tile
            return(
              <Tile 
                key={tileIndex} 
                row={tile.row} 
                col={tile.col} 
                isStart={isStart} 
                isEnd={isEnd} 
                isPath={isPath} 
                isTraversed={isTraversed} 
                isWall={isWall}
                handleMouseDown={() => handleMouseDown(row, col)}
                handleMouseUp={() => handleMouseUp(row, col)}
                handleMouseEnter={() => handleMouseEnter(row, col)}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Grid