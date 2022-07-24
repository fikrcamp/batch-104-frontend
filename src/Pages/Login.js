import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Utils/userContext";

function Login() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  async function handleOnSubmit() {
    try {
      const res = await axios.post("http://localhost:8000/user/login", inputs);
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      setUser(true);
      navigate("/");
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }
  return (
    <div className="flex justify-center">
      <div className="w-2/5 bg-white mt-10 rounded-md drop-shadow-md p-10">
        <h2 className="text-center text-xl font-bold ">Login</h2>
        <div className="flex flex-col space-y-3 mt-5">
          <input
            type="text"
            placeholder="Email"
            className="input"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <div className="flex justify-end pt-3">
          <button className="btn " onClick={handleOnSubmit}>
            Login
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            Dont have an account?{" "}
            <Link to="/signup" className=" font-bold hover:text-black">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
