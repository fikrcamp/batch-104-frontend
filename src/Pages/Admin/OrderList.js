import AdminMenu from "../../Components/AdminMenu";
import { MdOutlineVisibility } from "react-icons/md";
function OrderList() {
  return (
    <div>
      <AdminMenu />
      <div className="flex justify-center">
        <table>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Date</th>
            <th>Address</th>
            <th>View</th>
          </tr>
          <tr className="text-sm text-center">
            <td>Ali</td>
            <td className="font-bold">0632222</td>
            <td>12/12/22</td>
            <td>Jjigjiga Yar</td>
            <td>
              <MdOutlineVisibility className="text-blue-400" size={20} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default OrderList;
