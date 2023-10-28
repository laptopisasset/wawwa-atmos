import { Canvas } from "@react-three/fiber";
import './App.css';
import { Experience } from "./components/Experience";
import { ScrollControls } from "@react-three/drei";


function App() {

  return (
    <Canvas>
      <ScrollControls pages={100} damping={1}>
        <Experience />
      </ScrollControls>
    </Canvas>
  )
}

export default App
