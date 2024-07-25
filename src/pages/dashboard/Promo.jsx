// import React, { useState, useEffect } from "react";
// import SideBar from "../../components/SideBar";
// import CardPromo from "@/components/dashboard/CardPromo";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Promo = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [Promo, setPromo] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State untuk modal
  
//   const getPromo = async () => {
//     try {
//       const response = await axios.get(
//         "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos",
//         {
//           headers: {
//             "Content-Type": "application/json",
//             apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
//           },
//         }
//       );
//       setPromo(response.data.data);
//       console.log(response);
//     } catch (error) {
//       console.error(error.response);
//     }
//   };

//   useEffect(() => {
//     getPromo();
//   }, []);

//   return (
//     <div className="w-full h-[1024px] relative overflow-hidden flex flex-row items-start justify-start pt-0 pb-[29.4px] pr-[18px] pl-0 box-border gap-[12px] leading-[normal] tracking-[normal] text-left text-xl text-indianred font-body-2-regular mq825:pl-6 mq825:pr-6 mq825:box-border mq450:h-auto bg-">
//       <ToastContainer />
//       <SideBar/>
//         <div className="self-stretch flex flex-col justify-start gap-[32px] max-w-full pl-0 pr-0 pt-10">
//           <div className="box-border flex flex-row items-start justify-end max-w-full px-8 py-0 pt-4 pb-4 w- bg-slate-400 rounded-xl">
//             <div className="flex-1 flex flex-row items-end justify-between py-0 pr-0 pl-px box-border max-w-full gap-[20px] mq450:flex-wrap">
//               <div className="flex flex-col items-start justify-start">
//                 <b className="relative tracking-[0.15px] leading-[150%] font-semibold inline-block min-w-[121px] mq450:text-base mq450:leading-[24px]">
//                   Hello
//                 </b>
//                 <div className="relative text-sm tracking-[0.25px] leading-[150%] text-neutral-70 inline-block min-w-[106px] z-[1]">
//                   Have a nice day
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-row items-center justify-between ml-6 mr-6 mq450:relative">
//             <h1 className="text-3xl font-bold">Promo</h1>
//             <button
//               className="px-4 py-2 font-semibold text-black rounded-lg shadow-md bg-greenyellow hover:bg-yellowgreen-100 focus:outline-none"
//             >
//               <a 
//               className="no-underline"
//               href="/dashboard/CreateMenu">Create Promo</a>
//             </button>
//           </div>
//           <div className="flex flex-wrap justify-center gap-12 mt-4">
//             {Promo.map((item) => (
//               <CardPromo key={item.id} item={item} />
//             ))}
//           </div>
//         </div>
//       </div>
//   );
// };

// export default Promo;

import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import CardPromo from "@/components/dashboard/CardPromo";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import Bar from "@/components/dashboard/Bar";

const Promo = () => {
  const [Promo, setPromo] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 

  const getPromo = async () => {
    try {
      const response = await axios.get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos",
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
          },
        }
      );
      setPromo(response.data.data);
      console.log(response);
      
    } catch (error) {
      console.error(error.response);
    }
  };

  useEffect(() => {
    getPromo();
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPromo = Promo.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-row items-start justify-start  pb-[29.4px] pr-[18px]  box-border gap-[12px] text-left text-xl text-indianred  mq450:h-auto ">
      <SideBar  />
      <div className=" flex flex-col justify-start gap-[32px] w-full pt-10 h-full ">
        <Bar />
        <div className="flex flex-row items-center justify-between flex-shrink-0 p-2 mx-6 border-b-2 border-l-2 border-solid rounded-2xl mq450:flex-col mq450:items-start mq450:ml-2">
          <h1 className="text-3xl font-bold">Promo</h1>
          <button className="px-4 py-2 font-semibold text-black rounded-lg shadow-md bg-greenyellow hover:bg-yellowgreen-100 focus:outline-none">
            <a className="no-underline" href="/dashboard/CreateMenu">
              Create Promo
            </a>
          </button>
        </div>
        <div className="flex flex-row items-center justify-between mx-6 mq450:flex-col mq450:items-start mq450:ml-2">
          <input
            type="text"
            placeholder="Search Promo"
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 border rounded-lg focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4 mb-28 mq450:gap-6">
          {filteredPromo.map((item) => (
            <CardPromo key={item.id} item={item} getPromo={getPromo}   />
          ))}
        </div>
      <Footer />
      </div>
    </div>
  );
};

export default Promo;
