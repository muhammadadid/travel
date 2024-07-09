import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEllipsisV } from "react-icons/fa";
import axios from "axios";

const ProfileCard = ({ user }) => {
  const [role, setRole] = useState(user.role);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const toggleRole = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-user-role/${user.id}`,
        { role },
        {
          headers: {
            "Content-Type": "application/json",
            apikey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
          },
        }
      );
      console.log(response.data.role);
      setRole(response.data.role);
      window.location.reload();
      toast.success("Role updated successfully");
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Failed to update role");
    } finally {
      setLoading(false);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="flex-1 mx-2 mb-4">
      <ToastContainer />
      <div className="overflow-hidden rounded-lg shadow-lg w-60 bg-darkslateblue">
        <div className="relative">
          <div className="flex items-center justify-center h-32 bg-gray-100">
            <img
              src={user?.profilePictureUrl}
              alt="Profile Picture"
              className="object-cover w-32 h-32 rounded-full"
            />
            <button
              className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
              onClick={() => setIsModalOpen(true)}
            >
              <FaEllipsisV />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-500">{user?.name}</h2>
          <p className="text-sm text-gray-600">
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-1 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.5 3h-19C1.7 3 1 3.7 1 4.5v15c0 .8.7 1.5 1.5 1.5h19c.8 0 1.5-.7 1.5-1.5v-15c0-.8-.7-1.5-1.5-1.5zM12 16c-1.4 0-2.5-1.1-2.5-2.5S10.6 11 12 11s2.5 1.1 2.5 2.5S13.4 16 12 16zm4.5-7H7.5V6h9v3z" />
              </svg>
              {user?.email}
            </span>
          </p>
          <p className="text-sm text-gray-600">
            <span className="flex items-center">
              <svg
                className="w-5 h-5 mr-1 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 16.5V21c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1v-1.5c0-.8-.4-1.5-1-1.5H8c-.6 0-1 .7-1 1.5V21c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1v-4.5c0-.3.1-.6.3-.8l7-7c.4-.4 1-.4 1.4 0l7 7c.2.2.3.5.3.8z" />
              </svg>
              {user?.phoneNumber}
            </span>
          </p>
          <button className="w-full py-2 mt-4 text-sm font-semibold text-white bg-orange-500 rounded-md">
            {user?.role}
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-lg font-medium">Change Role</h2>
            <select
              value={role}
              onChange={handleRoleChange}
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <button
              onClick={toggleRole}
              className="w-full py-2 mt-4 text-sm font-semibold text-white bg-blue-500 rounded-md"
              disabled={loading}
            >
              {loading ? "Updating..." : "Change Role"}
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-2 mt-4 text-sm font-semibold text-white bg-gray-500 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
