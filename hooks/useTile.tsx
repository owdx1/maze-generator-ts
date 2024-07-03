"use client"
import { TileContext } from "@/context/tile-context"
import { useContext } from "react"

export const useTile = () => {
  const context = useContext(TileContext)

  if(!context) {
    throw new Error("e")
  }

  return context
}