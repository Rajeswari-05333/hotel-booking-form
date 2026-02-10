import { useLocation, useNavigate } from "react-router-dom";
import "./booking.css";
import "./confirmation.css";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, phone, email, checkIn, checkOut } = location.state || {};

  if (!name) {
    return <p style={{ textAlign: "center" }}>No booking data found.</p>;
  }

  return (
    <div className="confirmation-page">
      <div className="confirmation-card">
        <h2>Booking Confirmed ✅</h2>

        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Check-in:</strong> {checkIn}</p>
        <p><strong>Check-out:</strong> {checkOut}</p>

        <p className="thank-you">
          Thank you for booking with us. We look forward to hosting you!
        </p>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Confirmation;