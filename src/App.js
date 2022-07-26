import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Restaurant from "./Pages/Restaurant";
import Order from "./Pages/Order";
import List from "./Pages/List";
import RestaurantDetails from "./Pages/Admin/RestaurantDetails";
import MenuList from "./Pages/Admin/MenuList";
import OrderList from "./Pages/Admin/OrderList";
import Profile from "./Pages/Admin/Profile";
import MenuForm from "./Pages/Admin/MenuForm";
import Protect from "./Protect";
import { useState, useEffect } from "react";
import { UserContext } from "./Utils/userContext";

function App() {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    }
    setLoading(false);
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/order" element={<Order />} />
          <Route path="/list" element={<List />} />

          <Route path="/admin" element={<Protect />}>
            <Route path="restaurant" element={<RestaurantDetails />} />
            <Route path="menu" element={<MenuList />} />
            <Route path="order" element={<OrderList />} />
            <Route path="profile" element={<Profile />} />
            <Route path="menu/new" element={<MenuForm />} />
            <Route path="menu/edit/:id" element={<MenuForm />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
