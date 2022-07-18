import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Restaurant from "./Pages/Restaurant";
import Order from "./Pages/Order";
import List from "./Pages/List";
import RestaurantDetails from "./Pages/Admin/RestaurantDetails";
import MenuList from "./Pages/Admin/MenuList";
import OrderList from "./Pages/Admin/OrderList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/order" element={<Order />} />
        <Route path="/list" element={<List />} />
        <Route path="/admin/restaurant" element={<RestaurantDetails />} />
        <Route path="/admin/menu" element={<MenuList />} />
        <Route path="/admin/order" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
