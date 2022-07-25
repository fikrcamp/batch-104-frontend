import { MdStarRate, MdShoppingCart } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import MenuItem from "../Components/MenuItem";
import { useEffect, useState } from "react";
import axios from "axios";
function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    axios.get(`http://localhost:8000/restaurant/${id}`).then((res) => {
      setRestaurant(res.data.restaurant);
      setMenu(res.data.menu);
      setLoading(false);
    });
  });

  function addToCart(item) {
    // id, name, price , qty

    // if item alread in cart    qty +1

    const find = cart.findIndex((cartItem) => cartItem.id === item._id);
    console.log(find); //1
    // [{id:1,name:fish,qty:1},{id:2,name:chicken,qty:3}]
    if (find >= 0) {
      const newArray = cart;
      newArray[find].qty = newArray[find].qty + 1;
      setCart(newArray);
    } else {
      setCart([
        ...cart,
        { id: item._id, name: item.name, price: item.price, qty: 1 },
      ]);
    }

    setTotal(total + item.price);
  }

  function removeFromCart(item) {
    //find the item
    const find = cart.find((cartItem) => cartItem.id === item._id);
    if (find.qty > 1) {
      const index = cart.findIndex((cartItem) => cartItem.id === item._id);
      const newArray = cart;
      newArray[index].qty = newArray[index].qty - 1;
      setCart(newArray);
    } else {
      //remove item
      const removed = cart.filter((cartItem) => cartItem.id !== item._id);
      setCart(removed);
    }
    setTotal(total - item.price);
  }

  function removeItemFromCart(item) {
    // qty price
    const filtered = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(filtered);

    const subTotal = item.qty * item.price;
    setTotal(total - subTotal);
  }

  if (loading) return <h1>Loading....</h1>;

  return (
    <div className="grid grid-cols-4 bg-white">
      <div className="col-span-3 border-r border-gray-300 p-2">
        <div className="bg-[url('../public/food.jpg')] bg-bottom bg-no-repeat bg-cover h-60 rounded-2xl"></div>
        <img
          src={`http://localhost:8000/${restaurant.image}`}
          alt="food"
          className="h-24 w-24 rounded-full drop-shadow-lg -mt-14 ml-6"
        />
        {/* Restaurant INFO */}
        <div className="py-4">
          <h2 className="text-4xl font-bold">{restaurant.name}</h2>
          <div className="flex items-center space-x-2">
            <p className="text-sm text-gray-500">
              {restaurant.cusine.join(" | ")}
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
            {menu.map((item) => (
              <MenuItem item={item} add={addToCart} remove={removeFromCart} />
            ))}
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
          {cart.map((item) => (
            <div className="flex items-center text-sm space-x-2 py-3 border-b">
              <h2>x{item.qty}</h2>
              <h2 className="flex-1">{item.name}</h2>
              <h2>${item.price}</h2>
              <FaTrash color="red" onClick={() => removeItemFromCart(item)} />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex justify-between">
            <h2 className="font-bold">Total</h2>
            <h2>${total}</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold">Delivery</h2>
            <h2>$2</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-bold">Sub-Total</h2>
            <h2>${total === 0 ? 0 : total + 2}</h2>
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
