import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const rooms = [
  {
    id: 1,
    type: "Single Room",
    price: 1200,
    image: "https://images.unsplash.com/photo-1708616178113-f687b1113414?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZGlhbiUyMHN0eWxlJTIwaG90ZWwlMjByb29tfGVufDB8fDB8fHww",
    available: true,
  },
  {
    id: 2,
    type: "Double Room",
    price: 2200,
    image: "https://plus.unsplash.com/premium_photo-1661962340349-6ea59fff7e7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwc3R5bGUlMjBkb3VibGUlMjBob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
    available: true,
  },
  {
    id: 3,
    type: "Deluxe Room",
    price: 3500,
    image: "https://images.unsplash.com/photo-1669664863985-ac4a81e7483e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3R5bGUlMjBkZWx1eGUlMjBob3RlbCUyMHJvb218ZW58MHx8MHx8fDA%3D",
    available: false,
  },
];

function Rooms() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="page-title">Available Rooms</h1>

      <div className="room-list">
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>
            <img src={room.image} alt={room.type} />

            <h3>{room.type}</h3>
            <p>₹{room.price} / night</p>

            <p className={room.available ? "available" : "not-available"}>
              {room.available ? "Available" : "Sold Out"}
            </p>

            {room.available && (
                <button button onClick={() => navigate("/booking")}>
                   Book Now
                   </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;