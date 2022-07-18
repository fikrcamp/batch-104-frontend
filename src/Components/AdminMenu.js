import {
  MdRestaurant,
  MdRestaurantMenu,
  MdReceipt,
  MdOutlineLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";
function AdminMenu() {
  return (
    <div className="flex justify-center my-5 space-x-2">
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
      <div className="bg-black p-4 rounded-full">
        <MdOutlineLogout color="white" size="28" />
      </div>
    </div>
  );
}

export default AdminMenu;
