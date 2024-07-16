// const Navbar = () => {
//     return (
//         <div className=" top-[0px] left-[0px] w-full flex flex-row items-center justify-between p-8 box-border gap-[20px] max-w-full z-[1] text-xl font-rubik mq450:w-[1217px] fixed bg-opacity-20 ">
//             <div className="flex flex-row items-start justify-start">
//               <img
//                 className="h-[50px] w-[50px] relative"
//                 loading="lazy"
//                 alt=""
//                 src="/images/logo.png"
//                 width={20}
//                 height={20}
//               />
//             </div>
//             <div className="w-[417px] flex flex-row items-center justify-center gap-[31.8px] max-w-full mq1125:hidden mq450:gap-[16px]">
//               <div className="flex flex-col items-center justify-center">
//                 <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[57px]">
//                   Home
//                 </a>
//               </div>
//               <div className="flex flex-row items-start justify-start flex-1">
//                 <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[70px]">
//                   Explore
//                 </a>
//               </div>
//               <div className="flex flex-row items-start justify-start">
//                 <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[55px]">
//                   Travel
//                 </a>
//               </div>
//               <div className="flex flex-row items-start justify-start">
//                 <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[42px]">
//                   Blog
//                 </a>
//               </div>
//               <div className="flex flex-row items-start justify-start flex-1">
//                 <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px]">
//                   Pricing
//                 </a>
//               </div>
//             </div>
//             <div className="flex flex-row items-center justify-start gap-[36px] mq450:hidden">
//               <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[52px]">
//                 Login
//               </a>
//               <button className="cursor-pointer [border:none] py-5 px-8 bg-greenyellow rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-yellowgreen-100">
//                 <a className="[text-decoration:none] relative text-xl font-rubik text-black text-left inline-block min-w-[71px]">
//                   Sign up
//                 </a>
//               </button>
//             </div>
//           </div>

//     )
// }

// export default Navbar

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogin = () => {
    router.push("/Login");
  };

  const handleSignup = () => {
    router.push("/Register");
  };

  const handleLogoutClick = () => {
    // Implement logout logic here, e.g., clearing localStorage
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push("/"); // Redirect to home or another appropriate page after logout
  };

  useEffect(() => {
    // Check if there's an accessToken in localStorage when the component mounts
    const accessToken = localStorage.getItem('token');
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
        <a href="#" className="relative font-medium text-decoration-none text-inherit">
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
        <a href="#" className="relative text-decoration-none text-inherit">
          Pricing
        </a>
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
                src="your-profile-picture-url" // Replace with actual user profile picture URL
                alt="Profile"
              />
              <span className="text-sm"></span> {/* Replace with actual user's name */}
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
                  onClick={handleLogoutClick}
                  className="block w-full px-4 py-2 text-left text-black hover:bg-gray-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              onClick={handleLogin}
              className="text-sm text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              Login
            </button>
            <button
              onClick={handleSignup}
              className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

