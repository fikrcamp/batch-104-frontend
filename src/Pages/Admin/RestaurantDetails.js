import AdminMenu from "../../Components/AdminMenu";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function RestaurantDetails() {
  const [inputs, setInputs] = useState({});
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/restaurant/user", {
        headers: { authorization: token },
      })
      .then((res) => {
        setInputs(res.data.restaurant);
        setEdit(true);
      });
  }, []);

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

  async function handleOnEdit() {
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("phone", inputs.phone);
    formData.append("city", inputs.city);
    formData.append("cusine", inputs.cusine);
    formData.append("description", inputs.description);
    formData.append("image", inputs.image);
    try {
      await axios.put(
        `http://localhost:8000/restaurant/${inputs._id}`,
        formData
      );
      toast.success("edited restaurant");
    } catch (e) {
      console.log(e);
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
                value={inputs.name}
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant Phone"
                onChange={(e) =>
                  setInputs({ ...inputs, phone: e.target.value })
                }
                value={inputs.phone}
              />
            </div>
            <input
              type="text"
              className="input w-full"
              placeholder="Restaurant City"
              onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
              value={inputs.city}
            />
            <input
              type="text"
              className="input w-full"
              placeholder="Restaurant Cusines"
              onChange={(e) => setInputs({ ...inputs, cusine: e.target.value })}
              value={inputs.cusine}
            />
            <textarea
              placeholder="Restaurant Description"
              className="input w-full"
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
              value={inputs.description}
            ></textarea>
            <input
              type="file"
              className="w-full"
              onChange={(e) =>
                setInputs({ ...inputs, image: e.target.files[0] })
              }
            />
            {edit ? (
              <button
                className="bg-black w-full text-white p-3 text-center rounded-md mt-5 font-bold"
                onClick={handleOnEdit}
              >
                Edit
              </button>
            ) : (
              <button
                className="bg-black w-full text-white p-3 text-center rounded-md mt-5 font-bold"
                onClick={handleOnSubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
