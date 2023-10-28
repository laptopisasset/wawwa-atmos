import { Canvas } from "@react-three/fiber";
import './App.css';
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";


function App() {

  return (
    <Canvas>
      <ScrollControls pages={20} damping={0.5}>
        <Experience />
      </ScrollControls>
    </Canvas>
  )
}

export default App
