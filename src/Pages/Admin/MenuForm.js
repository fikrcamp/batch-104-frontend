import AdminMenu from "../../Components/AdminMenu";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function MenuForm() {
  const [inputs, setInputs] = useState();
  const navigate = useNavigate();
  async function handleOnSubmit() {
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", inputs.name);
      formData.append("price", inputs.price);
      formData.append("description", inputs.description);
      formData.append("category", inputs.category);
      formData.append("image", inputs.image);

      await axios.post("http://localhost:8000/menu", formData, {
        headers: { authorization: token },
      });
      toast.success("Menu item saved");
      navigate("/admin/menu");
    } catch (e) {
      toast.error("Error");
    }
  }

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
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Price"
                onChange={(e) =>
                  setInputs({ ...inputs, price: e.target.value })
                }
              />
            </div>
            <input
              type="text"
              className="input w-full"
              placeholder="Description"
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
            />
            <select
              className="input w-full"
              onChange={(e) =>
                setInputs({ ...inputs, category: e.target.value })
              }
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="drinks">Drinks</option>
            </select>
            <input
              type="file"
              onChange={(e) =>
                setInputs({ ...inputs, image: e.target.files[0] })
              }
            />
            <div className="flex justify-center">
              <button className="btn" onClick={handleOnSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuForm;
