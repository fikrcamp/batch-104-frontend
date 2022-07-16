import { FaMapMarkerAlt } from "react-icons/fa";
function RestaurantCard() {
  return (
    <div className="bg-white flex rounded-md drop-shadow-md">
      <div>
        <img
          src="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
          alt="food"
          className="h-28"
        />
      </div>
      <div className="flex-1 p-2">
        <h2 className="font-bold text-xl">Sultan</h2>
        <h2 className="text-sm text-bold text-gray-500 py-1">
          Arabian | Somali | Turkish
        </h2>
        <div className="flex items-center">
          <FaMapMarkerAlt />
          <h2 className="text-sm text-bold text-gray-500 ml-1">Jigjiga Yar</h2>
        </div>
      </div>
      <div className="p-2">
        <div className="bg-gray-100 rounded-full p-1 text-xs">4.2</div>
      </div>
    </div>
  );
}

export default RestaurantCard;
