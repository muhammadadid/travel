import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const profile = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user",
        {
          headers: {
            "Content-Type": "application/json",
            apikey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUser(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center max-w-lg p-6 mx-auto shadow-lg bg-khaki-400 rounded-3xl mt-28">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex items-center justify-center space-x-4">
            <img
              src={user.profilePictureUrl}
              alt="Profile Picture"
              className="w-40 h-40 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
            </div>
          </div>
          <div className="flex items-center justify-center mr-4">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg">
              Edit
            </button>
          </div>
        </div>
        <form className="grid w-full gap-4 mt-6 md:grid-cols-1">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              className="block px-4 py-2 mt-1 border rounded-md shadow-sm w-60 md:w-60 focus:ring focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={user.phoneNumber}
              className="block px-4 py-2 mt-1 border rounded-md shadow-sm w-60 md:w-60 focus:ring focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-gray-700">
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={user.role}
              className="block px-4 py-2 mt-1 border rounded-md shadow-sm w-60 md:w-60 focus:ring focus:ring-opacity-50"
            />
          </div>
        </form>
        <div className="w-full mt-6">
          <h3 className="text-lg font-medium">My email Address</h3>
          <div className="flex items-center mt-2 space-x-2">
            <div className="p-2 rounded-full bg-whitesmoke">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l11.985-9.713h-23.97l11.985 9.713zm12-8.713v13.424l-8-6.497v6.497h-8v-6.497l-8 6.497v-13.424l12 9.748 12-9.748z" />
              </svg>
            </div>
            <div>
              <p>{user.email}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
