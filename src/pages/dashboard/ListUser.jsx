import SideBar from "@/components/SideBar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCard from "@/components/ProfileCard";


const ListUser = () => {
  const [user, setUser] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user",
        {
          headers: {
            "Content-Type": "application/json",
            apikey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
          },
        }
      );
      setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full h-[1024px] relative  overflow-hidden flex flex-row items-start justify-start pt-0 pb-[29.4px] pr-[18px] pl-0 box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-xl text-indianred font-body-2-regular mq825:pl-6 mq825:pr-6 mq825:box-border mq450:h-auto bg-white">
      {/* <Navbar /> */}
      {isSidebarOpen && (
        <div className="w-[254px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border relative mq825:hidden">
          <SideBar toggleSidebar={toggleSidebar} />
        </div>
      )}
      {!isSidebarOpen && (
        <button
          className="fixed z-20 p-2 text-white rounded bg-yellowgreen-200 top-10 left-4"
          onClick={toggleSidebar}
        >
          <img src="/images/logo.png" alt="Open" className="w-10 h-10" />
        </button>
      )}
      <div
        className={`flex-1 flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border ${
          isSidebarOpen ? "max-w-[calc(100%_-_278px)]" : "max-w-full"
        } mq825:max-w-full`}
      >
        <div className="self-stretch flex flex-col items-end justify-start gap-[32px] max-w-full">
          <div className="w-[1380px] flex flex-row items-start justify-end py-0 px-8 box-border max-w-full bg-slate-400 rounded-xl pb-4 pt-4">
            <div className="flex-1 flex flex-row items-end justify-between py-0 pr-0 pl-px box-border max-w-full gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start ">
                <b className="relative tracking-[0.15px] leading-[150%] font-semibold inline-block min-w-[121px] mq450:text-base mq450:leading-[24px]">
                  Hello
                </b>
                <div className="relative text-sm tracking-[0.25px] leading-[150%] text-neutral-70 inline-block min-w-[106px] z-[1]">
                  Have a nice day
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container box-border p-4 mx-auto shadow-md bg-slate-200 rounded-2xl"> */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold">List Users</h1>
          </div>

          <div className="flex flex-wrap justify-center gap-6 ml-10">
            {user?.map((user) => (
              <ProfileCard key={user?.id} user={user} />
            ))}
          </div>
        </div>
        {/* </footer> */}
      </div>
    </div>
  );
};

export default ListUser;
