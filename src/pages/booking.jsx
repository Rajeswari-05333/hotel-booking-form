import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./booking.css";

function Booking() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dateError, setDateError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/confirmation", {
      state: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
      },
    });
  };

  const isFormValid =
    formData.name &&
    formData.phone.length === 10 &&
    formData.email &&
    !phoneError &&
    !emailError &&
    !dateError &&
    formData.checkIn &&
    formData.checkOut;

  return (
    <div className="page">
      <h2>Room Booking</h2>

      <form onSubmit={handleSubmit} className="booking-form">

        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          required
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          maxLength={10}
          value={formData.phone}
          required
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setFormData({ ...formData, phone: value });

            if (value.length < 10) {
              setPhoneError("Phone number must be 10 digits");
            } else {
              setPhoneError("");
            }
          }}
        />
        {phoneError && <p className="error">{phoneError}</p>}

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          required
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          onBlur={(e) => {
            if (!e.target.value.includes("@")) {
              setEmailError("Invalid email address");
            } else {
              setEmailError("");
            }
          }}
        />
        {emailError && <p className="error">{emailError}</p>}

        <label>Check-in Date</label>
        <input
          type="date"
          value={formData.checkIn}
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              checkIn: e.target.value,
              checkOut: "",
            });
            setDateError("");
          }}
        />

        <label>Check-out Date</label>
        <input
          type="date"
          value={formData.checkOut}
          min={formData.checkIn}
          disabled={!formData.checkIn}
          required
          onChange={(e) => {
            if (e.target.value <= formData.checkIn) {
              setDateError("Check-out date must be after check-in date");
            } else {
              setFormData({
                ...formData,
                checkOut: e.target.value,
              });
              setDateError("");
            }
          }}
        />
        {dateError && <p className="error">{dateError}</p>}

        <button
          type="submit"
          disabled={!isFormValid}
          className={`submit-btn ${!isFormValid ? "disabled" : ""}`}
        >
          Confirm Booking
        </button>

      </form>
    </div>
  );
}

export default Booking;