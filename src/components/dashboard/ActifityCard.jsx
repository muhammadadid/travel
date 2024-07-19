import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {  toast } from "react-toastify";

const ActifityCard = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()
  const toggleClick = () => {
    router.push(`/dashboard/actifity/${item?.id}`);
  }
  const handleDelete = () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
        },
      }
      const response = axios.delete(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-activity/${item?.id}`, config)
      console.log(response)
      toast.success("Activity deleted successfully")
      setIsModalOpen(false)

    } catch (error) {
      console.error(error.response)
      toast.error("Failed to delete Activity")
    }
    
  }
  return (
    <div className="overflow-hidden rounded shadow-lg max-w-80 bg-yellowgreen-100">
      <img className="w-full h-44" src={item?.imageUrls} alt={item?.title} />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold text-black">{item?.title}</div>
        <p className="text-base text-gray-700">
          <span className="block">
            <span className="font-semibold">Create :</span> {item?.createdAt}
          </span>
          <span className="block">
            <span className="font-semibold">Update :</span> {item?.updatedAt}
          </span>
        </p>
      </div>
      <div className="flex justify-between px-6 pb-4 ">
        <button
          onClick={toggleClick}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Edit
        </button>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="p-6 bg-white rounded-lg">
            <p>Are you sure you want to delete banner {item.name}?</p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActifityCard;
