import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex justify-center">
      <div className="w-2/5 bg-white mt-10 rounded-md drop-shadow-md p-10">
        <h2 className="text-center text-xl font-bold ">Login</h2>
        <div className="flex flex-col space-y-3 mt-5">
          <input type="text" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
        </div>
        <div className="flex justify-end pt-3">
          <button className="btn ">Login</button>
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
