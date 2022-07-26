import AdminMenu from "../../Components/AdminMenu";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
function MenuForm() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/menu/${id}`)
      .then((res) => setInputs(res.data.menu));
  }, []);

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

  async function handleOnEdit() {
    //edit
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("price", inputs.price);
    formData.append("description", inputs.description);
    formData.append("category", inputs.category);
    formData.append("image", inputs.image);
    await axios.put(`http://localhost:8000/menu/${id}`, formData);
    toast.success("Edited Item");
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
                value={inputs.name}
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Price"
                onChange={(e) =>
                  setInputs({ ...inputs, price: e.target.value })
                }
                value={inputs.price}
              />
            </div>
            <input
              type="text"
              className="input w-full"
              placeholder="Description"
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
              value={inputs.description}
            />
            <select
              className="input w-full"
              onChange={(e) =>
                setInputs({ ...inputs, category: e.target.value })
              }
              value={inputs.category}
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
              {id ? (
                <button className="btn" onClick={handleOnEdit}>
                  Edit
                </button>
              ) : (
                <button className="btn" onClick={handleOnSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuForm;
