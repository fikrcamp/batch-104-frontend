import { MdStarRate, MdShoppingCart } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuItem from "../Components/MenuItem";
function Restaurant() {
  return (
    <div className="grid grid-cols-4 bg-white">
      <div className="col-span-3 border-r border-gray-300 p-2">
        <div className="bg-[url('../public/food.jpg')] bg-bottom bg-no-repeat bg-cover h-60 rounded-2xl"></div>
        <img
          src="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
          alt="food"
          className="h-24 w-24 rounded-full drop-shadow-lg -mt-14 ml-6"
        />
        {/* Restaurant INFO */}
        <div className="py-4">
          <h2 className="text-4xl font-bold">Sultan</h2>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-500">
              Arabian | Somali | Turkish | Greek{" "}
            </p>
            <p className="text-sm flex items-center text-gray-500">
              <MdStarRate color="orange" /> 4.5
            </p>
          </div>
        </div>
        {/* Restaurant INFO */}
        {/* MENU ITEMS */}
        <div className="border-t pt-2">
          <h2 className="font-bold text-xl">Menu items</h2>
          <p className="text-gray-500 text-sm">
            The most commonly ordered items and dishes from this store
          </p>
          <div className="grid grid-cols-2 pt-4 gap-2">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
        {/* MENU ITEMS */}
      </div>

      <div className="p-2">
        <div className="flex justify-between">
          <h2 className="font-bold text-xl">Your Cart</h2>
          <MdShoppingCart size="25" />
        </div>
        <div>
          <div className="flex items-center text-sm space-x-2 py-3 border-b">
            <h2>x2</h2>
            <h2 className="flex-1">Mexican Pizza</h2>
            <h2>$12.99</h2>
            <FaTrash color="red" />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between">
            <h2 className="font-bold">Total</h2>
            <h2>$12.99</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold">Delivery</h2>
            <h2>$2</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold">Sub-Total</h2>
            <h2>$14.99</h2>
          </div>
          <Link to="/order">
            <button className="bg-black w-full text-white p-3 text-center rounded-md mt-4 font-bold">
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
