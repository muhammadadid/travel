import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import CardPromo from "@/components/dashboard/CardPromo";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Promo = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [Promo, setPromo] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk modal
  
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
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    getPromo();
  }, []);

  return (
    <div className="w-full h-[1024px] relative overflow-hidden flex flex-row items-start justify-start pt-0 pb-[29.4px] pr-[18px] pl-0 box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-xl text-indianred font-body-2-regular mq825:pl-6 mq825:pr-6 mq825:box-border mq450:h-auto bg-white">
      <ToastContainer />
      {/* <Navbar /> */}
      {isSidebarOpen && (
        <div className="w-[180px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border relative mq825:hidden">
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
        <div className="self-stretch flex flex-col justify-start gap-[32px] max-w-full pl-24">
          <div className="w-[1400px] flex flex-row items-start justify-end py-0 px-8 box-border max-w-full bg-slate-400 rounded-xl pb-4 pt-4">
            <div className="flex-1 flex flex-row items-end justify-between py-0 pr-0 pl-px box-border max-w-full gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start">
                <b className="relative tracking-[0.15px] leading-[150%] font-semibold inline-block min-w-[121px] mq450:text-base mq450:leading-[24px]">
                  Hello
                </b>
                <div className="relative text-sm tracking-[0.25px] leading-[150%] text-neutral-70 inline-block min-w-[106px] z-[1]">
                  Have a nice day
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between ml-8">
            <h1 className="text-3xl font-bold">Promo</h1>
            <button
              className="px-4 py-2 font-semibold text-black rounded-lg shadow-md bg-greenyellow hover:bg-yellowgreen-100 focus:outline-none"
              onClick={() => setIsModalOpen(true)}
            >
              Create Menu
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-12 mt-4">
            {Promo.map((item) => (
              <CardPromo key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div class="w-full  max-w-2xl bg-white p-6 rounded-xl shadow-md h-[850x]">
            <h2 class="text-2xl font-semibold text-center text-orange-600 mb-2 mt-2">
              Create Promo
            </h2>
            <form>
              <div class="flex mb-4">
                <div class="w-1/2 mr-4">
                  <label for="title" class="block text-gray-700 font-bold mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    class="w-full p-2 border rounded"
                    placeholder="Example: Promo Hiking Family"
                  ></input>
                </div>
                <div class="w-1/2">
                  <label for="image" class="block text-gray-700 font-bold mb-2">
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="imageUrl"
                    onChange={handleFileChange}
                    class="w-full p-2 border rounded"
                  ></input>
                  <button
                    type="button"
                    onClick={handleUpload}
                    class="mt-2 bg-green-500 text-white py-2 px-4 rounded"
                  >
                    Upload Image
                  </button>
                </div>
              </div>
              <div class="mb-2">
                <label
                  class="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  class="w-full p-2 border rounded"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the promo trip"
                ></textarea>
              </div>
              <div class="mb-2">
                <label
            
                  class="block text-gray-700 font-bold mb-2"
                >
                  Promo Code
                </label>
                <input
                  type="text"
                  id="promo_code"
                  name="promo_code"
                  value={formData.promo_code}
                  onChange={handleChange}
                  class="w-full p-2 border rounded"
                  placeholder="Example: HIKINGFAMILY"
                ></input>
              </div>
              <div class="mb-2">
                <label
                  
                  class="block text-gray-700 font-bold mb-2"
                >
                  Minimum Claim Price
                </label>
                <input
                  type="number"
                  id="minimum_claim_price"
                  name="minimum_claim_price"
                  value={formData.minimum_claim_price}
                  onChange={handleChange}
                  class="w-full p-2 border rounded"
                  placeholder="Example: 50000"
                ></input>
              </div>
              <div class="mb-2">
                <label  class="block text-gray-700 font-bold mb-2">
                  Terms & Conditions
                </label>
                <textarea
                  id="terms_condition"
                  name="terms_condition"
                  class="w-full p-2 border rounded"
                  value={formData.terms_condition}
                  onChange={handleChange}
                  placeholder="Please give the terms and conditions"
                ></textarea>
              </div>
              <div class="mb-2">
                <label
                  
                  class="block text-gray-700 font-bold mb-2"
                >
                  Promo Discount Price
                </label>
                <input
                  type="number"
                  name="promo_discount_price"
                  id="promo_discount_price"
                  value={formData.promo_discount_price}
                  onChange={handleChange}
                  class="w-full p-2 border rounded"
                  placeholder="Example: 50000"
                ></input>
              </div>
              <div class="flex justify-between">
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="bg-orange-500 text-white py-2 px-4 rounded"
                >
                  Create Promo
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  type="button"
                  class="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Promo;
