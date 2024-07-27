import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setToken, fetchUserDetails } from "../Redux/slice/authSlice";
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
            Authorization: `Bearer ${(token)}`,
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
    <div className="box-border fixed top-0 left-0 flex items-center justify-between w-full max-w-full gap-20 p-2 text-xl bg-white bg-opacity-40 z-1 font-rubik backdrop-blur-lg">
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
      <div className="flex items-center justify-center w-full max-w-full gap-8 mq450:max-w-xl ">
        <a
          href="/"
          className="relative font-medium no-underline text-inherit"
        >
          Home
        </a>
        <a href="/Promo" className="relative no-underline text-inherit">
          Promo
        </a>
        <a href="/Actifity" className="relative no-underline text-inherit">
          Actifity
        </a>
        {isLoggedIn &&
          user?.role === "admin" && ( 
            <a
              href="/dashboard/ListUser"
              className="relative no-underline text-inherit"
            >
              Dashboard
            </a>
          )}
      </div>
      <div className="flex items-center justify-start gap-8">
        {isLoggedIn ? (
          <div className="relative ">
            <p
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleProfileClick}
              aria-expanded={showDropdown ? "true" : "false"}
              aria-haspopup="true"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={user?.profilePictureUrl} 
                alt="Profile"
                width={20}
                height={20}
              />
              <span className="text-sm">{user?.name}</span>{" "}
            </p>
            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg">
                <a
                  href="/Profile"
                  className="block px-4 py-2 text-lg text-black no-underline rounded-lg hover:bg-gray-200"
                >
                  Profile
                </a>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-sm text-left text-white bg-red-700 rounded-lg hover:bg-red-950"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className="bg-transparent text-lgi hover:text-gray-900">
              <a href="/Login" className="text-white no-underline text-inherit">Login</a>
            </button>
            <button className="px-8 py-2 rounded-md bg-greenyellow hover:bg-yellowgreen-200">
              <a href="/Register" className="text-black no-underline ">Sign up</a>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
