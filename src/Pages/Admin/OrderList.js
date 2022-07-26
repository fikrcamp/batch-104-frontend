import AdminMenu from "../../Components/AdminMenu";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function OrderList() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/order")
      .then((res) => setOrders(res.data.orders));
  });

  async function handleOnDelete(id) {
    await axios.delete(`http://localhost:8000/order/${id}`);
    toast.success("deleted");
    //code
  }
  return (
    <div>
      <AdminMenu />
      <div className="flex justify-center">
        <table>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Ordered</th>
            <th>Address</th>
            <th>payment</th>
            <th>delete</th>
          </tr>
          {orders.map((order) => (
            <tr className="text-sm text-center">
              <td>{order.name}</td>
              <td className="font-bold">{order.phone}</td>
              <td>
                {order.cart.map((item) => (
                  <h1>
                    {item.qty}x {item.name}
                  </h1>
                ))}
              </td>
              <td>{order.address}</td>
              <td>{order.payment}</td>
              <td>
                <MdDelete
                  className="text-red-400"
                  size={20}
                  onClick={() => handleOnDelete(order._id)}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default OrderList;
