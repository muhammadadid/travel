import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import axios from "axios";

const CardPromo = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleDelete = () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          apikey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
        },
      };
      const response = axios.delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-promo/${item.id}`,
        config
      );
      console.log(response);
      toast.success("Promo deleted successfully");
      
    } catch (error) {
      console.error(error.response);
      toast.error("Failed to delete promo");
    } finally {
      setIsModalOpen(false);
      setIsEditModalOpen(false);
    }
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  return (
    <div className="w-60 relative flex flex-row items-start justify-start leading-[normal] tracking-[normal]">
      <section className="flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[23px] box-border relative gap-[24px] max-w-full text-left text-[18px] text-gray-100 font-nunito-sans">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[6px_6px_54px_rgba(0,_0,_0,_0.05)] rounded-[14px] bg-darkslateblue"></div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-32 object-cover z-[1]"
          loading="lazy"
          alt="Promo"
          src={item.imageUrl}
        />

        <div className="box-border flex flex-row items-start self-stretch justify-end max-w-full py-0 pl-6 pr-4">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] z-[1]">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <b className="relative leading-[20px]">{item.title}</b>
              <div className="flex flex-col items-start justify-start pt-0 pb-3 pr-5 pl-0 gap-[8px] text-[16px] text-royalblue">
                <b className="relative leading-[20px] inline-block min-w-[62px] whitespace-nowrap">
                  Rp.{item.promo_discount_price}
                </b>
              </div>
              <button 
              onClick={() => setIsEditModalOpen(true)}
              className="cursor-pointer [border:none] py-[5px] px-[23px] bg-[transparent] flex flex-row items-start justify-start relative whitespace-nowrap">
                <div className="h-full w-full absolute !m-[0] top-[0px] right-[1px] bottom-[0px] left-[0px] rounded-xl bg-greenyellow mix-blend-normal"></div>
                <b className="relative text-sm leading-[28px] inline-block font-nunito-sans text-black text-left min-w-[81px] z-[1]">
                  Edit Product
                </b>
              </button>
            </div>
            <div className="px-2 py-2 bg-white rounded-full cursor-pointer">
              <img
                className="relative object-contain w-4 h-4"
                loading="lazy"
                alt=""
                onClick={() => setIsModalOpen(true)}
                src="/images/delete.png"
              />
            </div>
          </div>
        </div>
        <img
          className="w-[7.4px] h-3 relative hidden z-[3]"
          alt=""
          src="/public/right-arrow.svg"
        />

        <img
          className="w-[41px] h-[41px] relative object-contain hidden z-[4]"
          alt=""
          src="/public/left@2x.png"
        />
      </section>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-4 bg-white rounded-lg">
            <h2>Are you sure you want to delete this promo?</h2>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 mr-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 text-white bg-red-500 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-4 bg-white rounded-lg">
            <h2>Edit Product</h2>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 mr-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleEdit}
                className="px-4 py-2 text-white bg-red-500 rounded"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default CardPromo;
