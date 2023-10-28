import { Canvas } from "@react-three/fiber";
import './App.css';
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";
import { EffectComposer, Noise } from "@react-three/postprocessing";



function App() {

  return (
    <Canvas>
      <ScrollControls pages={20} damping={0.5}>
        <Experience />
      </ScrollControls>
      <EffectComposer>
        <Noise opacity={0.3} />
      </EffectComposer>
    </Canvas>
  )
}

export default App
