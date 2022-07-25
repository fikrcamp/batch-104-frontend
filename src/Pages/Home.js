import { FiSearch, FiArrowRight } from "react-icons/fi";
import RestaurantCard from "../Components/RestaurantCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
function Home() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurant")
      .then((res) => setRestaurants(res.data.restaurants));
  });
  return (
    <div>
      {/* BANNER */}
      <div className="bg-[url('../public/food.jpg')] bg-bottom bg-no-repeat bg-cover h-[400px] flex justify-center items-center ">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-white py-4">
            Order from Hargeisa.
          </h2>
          <div className="flex items-center w-fit bg-white p-3 my-3">
            <FiSearch size={25} className="mr-2" />
            <input
              className="outline-none w-96"
              type="text"
              placeholder="Search...."
            />
          </div>
        </div>
      </div>
      {/* BANNER */}

      {/* NEAR YOU */}
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">Restaurants Near You!</h2>
          <Link to="/list">
            <div className="flex items-center">
              <h3>View All</h3>
              <FiArrowRight />
            </div>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {restaurants.map((restaurant) => (
            <RestaurantCard restaurant={restaurant} />
          ))}
        </div>
      </div>
      {/* NEAR YOU */}
    </div>
  );
}

export default Home;
