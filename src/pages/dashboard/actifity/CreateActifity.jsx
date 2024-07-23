import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CreateActivity = () => {
  const [file, setFile] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    description: "",
    price: "",
    price_discount: "",
    rating: "",
    total_reviews: "",
    facilities: "",
    address: "",
    province: "",
    city: "",
    location_maps: "",
  });

  useEffect(() => {
    
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories",
          {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            },
          }
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      price: parseInt(formData.price),
      imageUrls: imageUrls, // Ensure this is included
    };

    console.log("Payload:", payload); // Debugging line

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
      console.log("Image upload response:", res.data); 
      setImageUrls((prevUrls) => [...prevUrls, res.data.url]); 
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image!");
      console.log("Image upload error:", error); 
    }
  };

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      <div className="w-full max-w-4xl p-8 bg-white rounded shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center text-pink-600">
          Create Activity
        </h1>
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt="Activity Image"
            className="object-cover w-full mx-auto mb-6 rounded shadow-md h-80"
          />
        ))}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image Files
              </label>
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
              <button
                type="button"
                onClick={handleUpload}
                className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-pink-600 rounded-md hover:bg-pink-700"
              >
                Upload Image
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="categoryId"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              >
                <option value="">Select</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleOnChange}
                id="price"
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price Discount
              </label>
              <input
                type="text"
                name="price_discount"
                value={formData.price_discount}
                id="price-discount"
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Total Review
              </label>
              <input
                type="text"
                id="total-review"
                name="total_reviews"
                value={formData.total_reviews}
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Facilities
              </label>
              <input
                type="text"
                id="facilities"
                name="facilities"
                value={formData.facilities}
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Province
              </label>
              <input
                type="text"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location Maps
              </label>
              <input
                type="text"
                id="location_maps"
                name="location_maps"
                value={formData.location_maps}
                onChange={handleOnChange}
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-pink-600 rounded-md hover:bg-pink-700"
          >
            Create Activity
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateActivity;
