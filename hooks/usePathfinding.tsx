"use client"
import { PathfindingContext } from "@/context/pathfinding-context"
import { useContext } from "react"

export const usePathFinding = () => {
  const context = useContext(PathfindingContext)

  if(!context) {
    throw new Error("usePathfinding must be used within PathfindingProvider")
  }

  return context
}