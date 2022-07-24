import AdminMenu from "../../Components/AdminMenu";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
function Profile() {
  const [changeInputs, setChangeInputs] = useState({});

  async function handleChangePassword() {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        "http://localhost:8000/user/changePassword",
        changeInputs,
        { headers: { authorization: token } }
      );
      toast.success(res.data.message);
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  }

  return (
    <div>
      <AdminMenu />

      <div className="flex justify-center">
        <div className=" w-2/5">
          <div className="bg-white p-3 space-y-2 drop-shadow-md rounded-md">
            <h2 className="text-center font-bold text-xl py-2">Edit Profile</h2>
            <div className="flex space-x-2">
              <input type="text" className="input w-full" placeholder="Name" />
              <input
                type="text"
                className="input w-full"
                placeholder="Phone Number"
              />
            </div>
            <input type="text" className="input w-full" placeholder="Email" />
            <div className="flex justify-center">
              <button className="btn">Edit Profile</button>
            </div>
          </div>
          <div className="bg-white p-3 space-y-2 drop-shadow-md rounded-md mt-5">
            <h2 className="text-center font-bold text-xl py-2">
              Change Password
            </h2>

            <input
              type="text"
              className="input w-full"
              placeholder="Old Password"
              onChange={(e) =>
                setChangeInputs({
                  ...changeInputs,
                  oldPassword: e.target.value,
                })
              }
            />
            <input
              type="text"
              className="input w-full"
              placeholder="New Password"
              onChange={(e) =>
                setChangeInputs({
                  ...changeInputs,
                  newPassword: e.target.value,
                })
              }
            />
            <input
              type="text"
              className="input w-full"
              placeholder="Confirm New Password"
              onChange={(e) =>
                setChangeInputs({
                  ...changeInputs,
                  confirmNewPassword: e.target.value,
                })
              }
            />
            <div className="flex justify-center">
              <button className="btn" onClick={handleChangePassword}>
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
