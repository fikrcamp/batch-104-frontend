import AdminMenu from "../../Components/AdminMenu";
function RestaurantDetails() {
  return (
    <div>
      <AdminMenu />
      <div className="flex justify-center">
        <div className="bg-white w-2/5 p-3 mt-5 rounded-md drop-shadow-md">
          <h2 className="font-bold text-xl text-center">Restaurant Details</h2>
          <div className="py-5 space-y-2">
            <div className=" flex space-x-2">
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant Name"
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant Phone"
              />
            </div>
            <input
              type="text"
              className="input w-full"
              placeholder="Restaurant Address"
            />
            <input
              type="text"
              className="input w-full"
              placeholder="Restaurant Cusines"
            />
            <textarea
              placeholder="Restaurant Description"
              className="input w-full"
            ></textarea>
            <input type="file" className="w-full" />

            <button className="bg-black w-full text-white p-3 text-center rounded-md mt-5 font-bold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
