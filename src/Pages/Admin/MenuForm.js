import AdminMenu from "../../Components/AdminMenu";
function MenuForm() {
  return (
    <div>
      <AdminMenu />
      <div className="flex justify-center">
        <div className=" w-2/5">
          <div className="bg-white p-3 space-y-2 drop-shadow-md rounded-md">
            <h2 className="text-center font-bold text-xl py-2">Menu Item</h2>
            <div className="flex space-x-2">
              <input
                type="text"
                className="input w-full"
                placeholder="Item Name"
              />
              <input type="text" className="input w-full" placeholder="Price" />
            </div>
            <input
              type="text"
              className="input w-full"
              placeholder="Description"
            />
            <input type="file" />
            <div className="flex justify-center">
              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuForm;
