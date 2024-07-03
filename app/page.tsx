"use client"
import Grid from "@/components/grid";
import Nav from "@/components/nav";
import { PathfindingProvider } from "@/context/pathfinding-context";
import { SpeedProvider } from "@/context/speed-context";
import { TileProvider } from "@/context/tile-context";
import { useRef } from "react";

export default function Home() {

  const isVisualizationRunningRef = useRef(false)

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col">
            <Nav />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}
