import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setToken, fetchUserDetails } from "../pages/Redux/slice/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/logout",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      router.push("/");
      toast.success("Logged out successfully");
      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to log out");
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken && !token) {
      dispatch(setToken(storedToken));
      dispatch(fetchUserDetails(storedToken));
    } else if (token && !user) {
      dispatch(fetchUserDetails(token));
    }
  }, [dispatch, token, user]);
  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };
  
  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="box-border fixed top-0 left-0 flex items-center justify-between w-full max-w-full gap-20 p-8 text-xl z-1 font-rubik bg-opacity-20">
      <div className="flex items-start justify-start">
        <img
          className="relative w-12 h-12"
          loading="lazy"
          alt=""
          src="/images/logo.png"
          width={20}
          height={20}
        />
      </div>
      <div className="flex items-center justify-center w-full max-w-full gap-8 md:max-w-xl">
        <a
          href="/"
          className="relative font-medium text-decoration-none text-inherit"
        >
          Home
        </a>
        <a href="#" className="relative text-decoration-none text-inherit">
          Explore
        </a>
        <a href="#" className="relative text-decoration-none text-inherit">
          Travel
        </a>
        <a href="#" className="relative text-decoration-none text-inherit">
          Blog
        </a>
        {isLoggedIn &&
          user?.role === "admin" && ( // Conditional rendering based on user role
            <a
              href="/dashboard/ListUser"
              className="relative text-decoration-none text-inherit"
            >
              Dashboard
            </a>
          )}
      </div>
      <div className="flex items-center justify-start gap-8">
        {isLoggedIn ? (
          <div className="relative">
            <button
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleProfileClick}
              aria-expanded={showDropdown ? "true" : "false"}
              aria-haspopup="true"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={user?.profilePictureUrl} // Replace with actual user profile picture URL
                alt="Profile"
                width={20}
                height={20}
              />
              <span className="text-sm">{user?.name}</span>{" "}
              {/* Replace with actual user's name */}
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg">
                <a
                  href="/Profile"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Profile
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-black hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none">
              <a href="/Login">Login</a>
            </button>
            <button className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none">
              <a href="/Register">Sign up</a>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
