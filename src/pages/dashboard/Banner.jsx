import React, { useState, useEffect } from "react";
import axios from "axios";
import BannerCard from "@/components/dashboard/BannerCard";
import { toast } from "react-toastify";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
  })

  const getBanners = async () => {
    try {
      const response = await axios.get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
        {
          headers: {
            "Content-Type": "application/json",
            apikey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
          },
        }
      );
      setBanners(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error.response);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      imageUrl: imageUrl,
    }
    try {
      const response = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-banner", payload,
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
          },
        }
      ); 
      console.log(response.data.data);
      toast.success('Banner created successfully');
    } catch (error) {
      console.error(error.response);
      toast.error('Failed to create banner');
    }
  };

  const handleUpload = async () => {
    const uploadData = new FormData();
    uploadData.append("image", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI5NWE4MDNjMy1iNTFlLTQ3YTAtOTBkYi0yYzJmM2Y0ODE1YTkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Nzk4NDM0NDR9.ETsN6dCiC7isPReiQyHCQxya7wzj05wz5zruiFXLx0k",
        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
      },
    };

    try {
      const res = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
        uploadData,
        config
      );
      setImageUrl(res.data.url); // Simpan URL gambar
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image!");
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  
  useEffect(() => {
    getBanners();
  }, []);

  const filteredBanners = banners.filter(
    (banner) =>
      banner.name && banner.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-8 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Banners</h1>
        <button 
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700">
          + New Banner
        </button>
      </div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-gray-600">
          {filteredBanners.length} banners found
        </span>
        <input
          type="text"
          placeholder="Search User"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded"
        />
      </div>
      <div className="grid grid-cols-1 gap-6 mq1750:grid-cols-3 mq800:grid-cols-1 mq1125:grid-cols-2">
        {filteredBanners.length > 0 ? (
          filteredBanners.map((item) => (
            <BannerCard key={item.id} item={item} />
          ))
        ) : (
          <p className="text-center text-gray-700 col-span-full">
            No banners found
          </p>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="relative w-full max-w-md p-6 bg-white rounded-lg">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute text-gray-600 top-2 right-2"
          >
            &times;
          </button>
          <h2 className="mb-4 text-xl font-bold">Add Banner</h2>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded Banner"
              className="object-cover w-full h-48 mb-4 rounded"
            />
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Choose Banner</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-2 mt-2 border rounded"
              />
              <button
                type="button"
                onClick={handleUpload}
                className="px-4 py-2 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              >
                Upload
              </button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Banner Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-2 mt-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-yellow-500 rounded hover:bg-yellow-700"
            >
              Save
            </button>
          </form>
        </div>
      </div>
      )}
    </div>
  );
};

export default Banner;
