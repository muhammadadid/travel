import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/router";

const EditPromo = ({ item }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(item?.imageUrl || "");
  const [formData, setFormData] = useState({
    title:  "",
    description: "",
    promo_code:  "",
    minimum_claim_price: "",
    terms_condition: "",
    promo_discount_price: "",
  });

  const router = useRouter();
  const { id } = router.query;
  const handleSubmit = async () => {
    const payload = {
      title: formData.title,
      description: formData.description,
      promo_code: formData.promo_code,
      minimum_claim_price: parseInt(formData.minimum_claim_price),
      terms_condition: formData.terms_condition,
      promo_discount_price: parseInt(formData.promo_discount_price),
      imageUrl: imageUrl,
    };
    const config = {
      headers: {
        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const response = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${id}`,
        payload,
        config
      );
      toast.success("Promo updated successfully!");
      console.log(response.data.data);
    } catch (error) {
      toast.error("Failed to update promo!");
      console.error(error);
    }
  };

  const fetchPromo = async () => {
    if (id) {
      try {
        const response = await axios.get(
          `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${id}`,
          {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = response.data.data;
        setFormData({
          title: data.title,
          description: data.description,
          promo_code: data.promo_code,
          minimum_claim_price: data.minimum_claim_price,
          terms_condition: data.terms_condition,
          promo_discount_price: data.promo_discount_price,
          imageUrl: data.imageUrl,
        });
        setImageUrl(data.imageUrl);
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    fetchPromo();
  }, [id]);

  const handleUpload = async () => {
    if (!file) {
      toast.error("No file selected for upload.");
      return;
    }
    const uploadData = new FormData();
    uploadData.append("image", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer YOUR_AUTH_TOKEN",
        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
      },
    };

    try {
      const res = await axios.post(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
        uploadData,
        config
      );
      setImageUrl(res.data.url); // Save image URL
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image!");
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCancel = () => {
    router.push("/dashboard/Promo");
  };
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-row items-start justify-start pt-0 pb-[29.4px] pr-[18px] pl-0 box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-xl text-indianred font-body-2-regular mq825:pl-6 mq825:pr-6 mq825:box-border mq450:h-auto bg-white">
      <ToastContainer />
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
          <div className="max-w-4xl p-8 mx-auto bg-white rounded-lg shadow-md">
            <h1 className="mb-8 text-3xl font-bold text-center text-orange-500">
              Edit Promo
            </h1>
            {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded Category"
              className="object-cover w-full h-64 mb-4 rounded"
            />
          )}
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700">
                      Title
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="title"
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700">
                      Description
                    </label>
                    <textarea
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700">
                      Promo Code
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="promo-code"
                      type="text"
                      name="promo_code"
                      value={formData.promo_code}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 font-bold text-gray-700"
                      for="min-claim-price"
                    >
                      Minimum Claim Price
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="min-claim-price"
                      type="text"
                      name="minimum_claim_price"
                      value={formData.minimum_claim_price}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700">
                      Terms & Conditions
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="terms"
                      type="text"
                      name="terms_conditions"
                      value={formData.terms_condition}
                      onChange={handleChange}
                    ></input>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700">
                      Promo Discount Price
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="promo-discount-price"
                      type="text"
                      name="promo_discount_price"
                      value={formData.promo_discount_price}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <label className="block mb-2 font-bold text-gray-700">
                      Image File
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="image"
                      type="file"
                      name="image"
                      onChange={handleFileChange}
                      value={formData.image}
                    ></input>
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                      onClick={handleUpload}
                    >
                      Upload Image
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  className="px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline"
                  onClick={handleSubmit}
                >
                  Update Promo
                </button>
                <button
                  className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 focus:outline-none focus:shadow-outline"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPromo;
