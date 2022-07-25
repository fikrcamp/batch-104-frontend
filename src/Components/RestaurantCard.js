import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurant/${restaurant._id}`}>
      <div className="bg-white flex rounded-md drop-shadow-md">
        <div>
          <img
            src={`http://localhost:8000/${restaurant.image}`}
            alt="food"
            className="h-28"
          />
        </div>
        <div className="flex-1 p-2">
          <h2 className="font-bold text-xl">{restaurant.name}</h2>
          <h2 className="text-sm text-bold text-gray-500 py-1">
            {restaurant.cusine.join(" | ")}
          </h2>
          <div className="flex items-center">
            <FaMapMarkerAlt />
            <h2 className="text-sm text-bold text-gray-500 ml-1">
              {restaurant.city}
            </h2>
          </div>
        </div>
        <div className="p-2">
          <div className="bg-gray-100 rounded-full p-1 text-xs">4.2</div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
