import { FaTrash } from "react-icons/fa";
function Order() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 w-1/2 mt-10 bg-white p-4">
        <div className="space-y-2">
          <h2 className="font-bold text-center">Your info</h2>
          <input type="text" className="input w-full" placeholder="Name" />
          <input type="text" className="input w-full" placeholder="Address" />
          <input
            type="text"
            className="input w-full"
            placeholder="Phone Number"
          />
          <input
            type="text"
            className="input w-full"
            placeholder="Payment method"
          />
        </div>
        <div className="px-2">
          <h2 className="font-bold text-center">Items</h2>
          <div className="">
            <div className="flex items-center text-sm space-x-2 py-3 border-b">
              <h2>x2</h2>
              <h2 className="flex-1">Mexican Pizza</h2>
              <h2>$12.99</h2>
            </div>
            <div className="">
              <div className="flex justify-between mt-4">
                <h2 className="font-bold">Sub-Total</h2>
                <h2>$14.99</h2>
              </div>
              <button className="bg-black w-full text-white p-3 text-center rounded-md mt-4 font-bold">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
