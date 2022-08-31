import Navigation from "./component/Navigation";
import Home from "./pages/Home";
import Room from "./pages/Room";
import RoomBoked from "./pages/RoomBoked";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/roombooked" element={<RoomBoked/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
