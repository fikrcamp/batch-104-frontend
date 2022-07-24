import AdminMenu from "../../Components/AdminMenu";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function RestaurantDetails() {
  const [inputs, setInputs] = useState();

  async function handleOnSubmit() {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("phone", inputs.phone);
    formData.append("city", inputs.city);
    formData.append("cusine", inputs.cusine);
    formData.append("description", inputs.description);
    formData.append("image", inputs.image);
    try {
      const res = await axios.post(
        "http://localhost:8000/restaurant",
        formData,
        {
          headers: { authorization: token },
        }
      );
      toast.success(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

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
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant Phone"
                onChange={(e) =>
                  setInputs({ ...inputs, phone: e.target.value })
                }
              />
            </div>
            <input
              type="text"
              className="input w-full"
              placeholder="Restaurant City"
              onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
            />
            <input
              type="text"
              className="input w-full"
              placeholder="Restaurant Cusines"
              onChange={(e) => setInputs({ ...inputs, cusine: e.target.value })}
            />
            <textarea
              placeholder="Restaurant Description"
              className="input w-full"
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
            ></textarea>
            <input
              type="file"
              className="w-full"
              onChange={(e) =>
                setInputs({ ...inputs, image: e.target.files[0] })
              }
            />

            <button
              className="bg-black w-full text-white p-3 text-center rounded-md mt-5 font-bold"
              onClick={handleOnSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
