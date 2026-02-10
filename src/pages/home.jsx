import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1 className="text-red-500 text-3xl">Hello</h1>
      <h1>Welcome to The Royal Lotus Residency</h1>
      <p>Bhubaneswar, Odisha</p>
      <p>Comfortable stay with modern amenities.</p>

      <Link to="/rooms">
        <button>Check Room Availability</button>
      </Link>
    </div>
  );
}

export default Home;