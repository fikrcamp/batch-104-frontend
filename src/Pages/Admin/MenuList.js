import AdminMenu from "../../Components/AdminMenu";
import { MdModeEditOutline, MdDelete, MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
function MenuList() {
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
            <tr className="text-sm text-center">
              <td>
                <img
                  src="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
                  alt="food"
                  className="h-10"
                />
              </td>
              <td className="font-bold">Mexican Pizza</td>
              <td>$12</td>
              <td>
                <MdModeEditOutline className="text-blue-500" size={20} />
              </td>
              <td>
                <MdDelete color="red" size={20} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
