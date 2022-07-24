import {
  MdRestaurant,
  MdRestaurantMenu,
  MdReceipt,
  MdOutlineLogout,
  MdSupervisorAccount,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Utils/userContext";

function AdminMenu() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
    setUser(false);
  }

  return (
    <div className="flex justify-center my-5 space-x-2">
      <Link to="/admin/profile">
        <div className="bg-black p-4 rounded-full hover:bg-gray-600">
          <MdSupervisorAccount color="white" size="28" />
        </div>
      </Link>

      <Link to="/admin/restaurant">
        <div className="bg-black p-4 rounded-full hover:bg-gray-600">
          <MdRestaurant color="white" size="28" />
        </div>
      </Link>
      <Link to="/admin/menu">
        <div className="bg-black p-4 rounded-full">
          <MdRestaurantMenu color="white" size="28" />
        </div>
      </Link>
      <Link to="/admin/order">
        <div className="bg-black p-4 rounded-full">
          <MdReceipt color="white" size="28" />
        </div>
      </Link>
      <div className="bg-black p-4 rounded-full" onClick={handleLogout}>
        <MdOutlineLogout color="white" size="28" />
      </div>
    </div>
  );
}

export default AdminMenu;
