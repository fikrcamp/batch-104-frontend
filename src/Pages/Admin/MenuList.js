import AdminMenu from "../../Components/AdminMenu";
import { MdModeEditOutline, MdDelete, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function MenuList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/menu", { headers: { authorization: token } })
      .then((res) => setItems(res.data.menu));
  });

  async function deleteItem(id) {
    await axios.delete(`http://localhost:8000/menu/${id}`);
  }

  return (
    <div>
      <AdminMenu />
      <div className="flex justify-center">
        <div>
          <Link to="/admin/menu/new">
            <button className="bg-green-400 p-2 flex items-center text-sm font-bold mb-2">
              <MdAdd size={20} /> Add Item
            </button>
          </Link>
          <table>
            <tr>
              <th>Image</th>
              <th>Menu Item</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {items.map((item) => (
              <tr className="text-sm text-center">
                <td>
                  <img
                    src={`http://localhost:8000/${item.image}`}
                    alt="food"
                    className="h-10"
                  />
                </td>
                <td className="font-bold">{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <MdModeEditOutline className="text-blue-500" size={20} />
                </td>
                <td>
                  <MdDelete
                    color="red"
                    size={20}
                    onClick={() => deleteItem(item._id)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
