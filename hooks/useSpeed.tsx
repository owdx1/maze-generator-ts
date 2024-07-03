"use client"
import { SpeedContext } from "@/context/speed-context"
import { useContext } from "react"

export const useSpeed = () => {
  const context = useContext(SpeedContext);

  if(!context) {
    throw new Error("useSpeed must be used within SpeedProvider");
  }

  return context
}