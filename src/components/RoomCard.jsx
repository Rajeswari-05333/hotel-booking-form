function RoomCard({ image, type, price, available }) {
  return (
    <div className="room-card">
      <img src={image} alt={type} />

      <h3>{type}</h3>
      <p>Price: ₹{price} / night</p>

      <p className={available ? "available" : "not-available"}>
        {available ? "Available" : "Not Available"}
      </p>

      <button disabled={!available}>
        {available ? "Book Now" : "Sold Out"}
      </button>
    </div>
  );
}

export default RoomCard;