import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ActifityCard from "@/components/dashboard/ActifityCard";

const Actifity = () => {
  const [actifity, setActifity] = useState([]);
  

  const getActifity = async () => {
    try {
      const response = await axios.get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities",
        {
          headers: {
            "Content-Type": "application/json",
            apikey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
          },
        }
      );
      setActifity(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    getActifity();
  }, []);

  return (
    <main className="min-h-screen p-8 bg-yellow-50">
      <div className="flex items-center justify-between">
        <h1 className="mb-8 text-3xl font-bold">Activity Data</h1>
        <button className="flex items-center p-4 text-white bg-red-400 rounded-full shadow-lg">
          <a href="/dashboard/CreateActifity">Create Actifity</a> 
        </button>
      </div>
      <div className="flex justify-between mb-4">
        <select className="p-2 border border-gray-300 rounded">
          <option value="">Select</option>
          {/* Add your filter options here */}
        </select>
        <div>
          <button className="px-4 py-2 mr-2 text-white bg-yellow-400 rounded">
            Filter
          </button>
          <button className="px-4 py-2 text-white bg-gray-400 rounded">
            Reset
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {actifity.map((item) => (
          <ActifityCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default Actifity;
