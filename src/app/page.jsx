"use client"

import CarShow from "@/components/CarShow"
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react"

import "@/styles/global.css"
import Loading from "@/components/Loading"

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas shadows>
        <CarShow/>
      </Canvas>
    </Suspense>
  )
}

export default App;