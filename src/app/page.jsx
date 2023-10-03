"use client"

import CarShow from "@/components/CarShow"
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react"

import "@/styles/global.css"

const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow/>
      </Canvas>
    </Suspense>
  )
}

export default App;