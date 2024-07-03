import { cn } from '@/lib/utils';
import { END_TILE_STYLE, PATH_TILE_STYLE, START_TILE_STYLE, TILE_STYLE, TRAVERSED_TILE_STYLE, WALL_TILE_STYLE } from '@/utils/constants';
import React from 'react'

interface MouseFunction {
  (row: number, col: number): void
}

const Tile = ({ row, col, isStart, isEnd, isTraversed, isWall, isPath, handleMouseDown, handleMouseUp, handleMouseEnter }: 
  {
    row: number,
    col: number,
    isStart: boolean,
    isEnd: boolean,
    isTraversed: boolean,
    isWall: boolean,
    isPath: boolean,
    handleMouseDown: MouseFunction,
    handleMouseUp: MouseFunction,
    handleMouseEnter: MouseFunction
  }
) => {
  
  let tileStyle;

  if(isStart) {
    tileStyle = START_TILE_STYLE
  }
  else if(isPath) {
    tileStyle = PATH_TILE_STYLE
  }
  else if(isEnd) {
    tileStyle = END_TILE_STYLE
  }
  else if (isTraversed) {
    tileStyle = TRAVERSED_TILE_STYLE
  }
  else if(isWall) {
    tileStyle = WALL_TILE_STYLE
  }
  else {
    tileStyle = TILE_STYLE
  }

  return (
    <div 
      className={cn(
        {
          "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border": true,
          "bg-green-400": isStart,
          "bg-red-400": isEnd,
          "bg-green-500": isPath,
          "bg-cyan-400": isTraversed,
          "bg-gray-400": isWall
        }
      )} 
      id={`${row}-${col}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
    
    />
  


  )
}

export default Tile