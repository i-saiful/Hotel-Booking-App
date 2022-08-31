import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import Room from "./pages/Room";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
