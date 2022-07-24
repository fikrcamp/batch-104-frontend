import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Utils/userContext";

function Header() {
  const { user } = useContext(UserContext);
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

      <div>
        {user ? (
          <Link to="/admin/order">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              alt="profile"
              className="h-12 rounded-full"
            />
          </Link>
        ) : (
          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
        )}
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
}

export default Header;
