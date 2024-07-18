import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateActifity = () => {
  const [file, setFile] = useState(null);
  const [imageUrls, setImageUrls] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    category: "",
    description: "",
    price: "",
    price_discount: "",
    rating: "",
    total_reviews: "",
    facilites: "",
    address: "",
    province: "",
    city: "",
    location_maps: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      categoryId: formData.categoryId,
      category: formData.category,
      description: formData.description,
      price: formData.price,
      price_discount: formData.price_discount,
      rating: formData.rating,
      total_reviews: formData.total_reviews,
      facilites: formData.facilites,
      address: formData.address,
      province: formData.province,
      city: formData.city,
      location_maps: formData.location_maps,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
      },
    };
    try {
      const response = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-activity",
        payload,
        config
      );
      console.log(response.data.data);
      toast.success("Activity created successfully");
    } catch (error) {
      console.error(error.response);
      toast.error("Failed to create activity");
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
      setImageUrls(res.data.url); // Simpan URL gambar
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image!");
      console.log(error);
    }
  };
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div class="bg-yellow-50 flex justify-center items-center min-h-screen">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h1 class="text-2xl font-bold text-center text-pink-600 mb-6">
          Create Activity
        </h1>
        <img
          src={imageUrls}
          alt="Activity Image"
          class="mx-auto mb-6 rounded shadow-md w-full h-80 object-cover"
        ></img>
        <form class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                for="title"
                class="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="image"
                class="block text-sm font-medium text-gray-700"
              >
                Image Files
              </label>
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={handleUpload}
                class="mt-2 inline-flex items-center px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-md hover:bg-pink-700"
              >
                Add Image
              </button>
            </div>
            <div>
              <label
                for="category"
                class="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option>Select</option>
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
            </div>
            <div>
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div>
              <label
                for="price"
                class="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="price-discount"
                class="block text-sm font-medium text-gray-700"
              >
                Price Discount
              </label>
              <input
                type="text"
                id="price-discount"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="rating"
                class="block text-sm font-medium text-gray-700"
              >
                Rating
              </label>
              <input
                type="text"
                id="rating"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="total-review"
                class="block text-sm font-medium text-gray-700"
              >
                Total Review
              </label>
              <input
                type="text"
                id="total-review"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="facilities"
                class="block text-sm font-medium text-gray-700"
              >
                Facilities
              </label>
              <input
                type="text"
                id="facilities"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="address"
                class="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label for="city" class="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="province"
                class="block text-sm font-medium text-gray-700"
              >
                Province
              </label>
              <input
                type="text"
                id="province"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div class="col-span-2">
              <label
                for="location-maps"
                class="block text-sm font-medium text-gray-700"
              >
                Location Maps
              </label>
              <input
                type="text"
                id="location-maps"
                class="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 bg-gray-400 text-white text-sm font-medium rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700"
            >
              Create Activity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateActifity;
