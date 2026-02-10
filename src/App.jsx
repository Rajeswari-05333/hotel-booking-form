import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import Booking from "./pages/booking";
import Confirmation from "./pages/confirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default App;