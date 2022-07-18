import { FiSearch } from "react-icons/fi";
import RestaurantCard from "../Components/RestaurantCard";
function List() {
  return (
    <div>
      <div className="flex justify-center bg-white">
        <div className="flex py-4">
          <select className="border-r-2 border-white text-sm px-2">
            <option>Hargeisa</option>
            <option>Borama</option>
          </select>
          <div className="flex items-center w-fit bg-gray-200 p-3">
            <FiSearch size={25} className="mr-2" />
            <input
              className="outline-none w-96 bg-gray-200"
              type="text"
              placeholder="Search...."
            />
          </div>

          <button className="bg-black px-6 text-white font-bold text-sm">
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" w-3/4 my-10 p-2">
          <h2 className="font-bold">Found 12 restaurants in Hargeisa</h2>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
