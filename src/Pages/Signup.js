function Signup() {
  return (
    <div className="flex justify-center">
      <div className="w-2/5 bg-white mt-10 rounded-md drop-shadow-md p-10">
        <h2 className="text-center text-xl font-bold ">Sign up</h2>
        <div className="flex flex-col space-y-3 mt-5">
          <input type="text" placeholder="Name" className="input" />
          <input type="text" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
          />
        </div>
        <div className="flex justify-end pt-3">
          <button className="btn ">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
