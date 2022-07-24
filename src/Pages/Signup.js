import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  async function handleOnSubmit() {
    try {
      const res = await axios.post("http://localhost:8000/user/signup", inputs);
      toast.success(res.data.message);
      navigate("/");
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-2/5 bg-white mt-10 rounded-md drop-shadow-md p-10">
        <h2 className="text-center text-xl font-bold ">Sign up</h2>
        <div className="flex flex-col space-y-3 mt-5">
          <input
            type="text"
            placeholder="Name"
            className="input"
            onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            className="input"
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <select
            className="input"
            onChange={(e) => setInputs({ ...inputs, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="owner">Restaurant Owner</option>
          </select>
          <input
            type="password"
            placeholder="Password"
            className="input"
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className="flex justify-end pt-3">
          <button className="btn" onClick={handleOnSubmit}>
            Sign up
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className=" font-bold hover:text-black">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
