import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
    </Routes>
  )
}

export default App;
