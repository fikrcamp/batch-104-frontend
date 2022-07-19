import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center p-5 bg-white drop-shadow-md">
      <div>
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Uber_Eats_2020_logo.svg/2560px-Uber_Eats_2020_logo.svg.png"
            alt="logo"
            className="h-6"
          />
        </Link>
      </div>
      {/* <div className="space-x-2">
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/Home">About</Link>
        <Link to="/Home">Contact</Link>
      </div> */}
      <div>
        {/* <Link to="/login">
          <button className="btn">Login</button>
        </Link> */}
        <Link to="/admin/order">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
            alt="profile"
            className="h-12 rounded-full"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
