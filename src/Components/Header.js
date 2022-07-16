import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-5 bg-white">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Uber_Eats_2020_logo.svg/2560px-Uber_Eats_2020_logo.svg.png"
          alt="logo"
          className="h-6"
        />
      </div>
      <div className="space-x-2">
        <Link to="/Home">Home</Link>
        <Link to="/Home">About</Link>
        <Link to="/Home">Contact</Link>
      </div>
      <div>
        <button className="btn">Login</button>
      </div>
    </div>
  );
}

export default Header;
