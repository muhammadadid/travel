// // import React, { useState } from "react";
// // import axios from "axios";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// // import SideBar from "../../components/SideBar";
// // const EditPromo = ({ item }) => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// //   const [file, setFile] = useState();
// //   const [formData, setFormData] = useState({
// //     title: item.title,
// //     description: item.description,
// //     promo_code: item.promo_code,
// //     minimum_claim_price: item.minimum_claim_price,
// //     terms_condition: item.terms_condition,
// //     promo_discount_price: item.promo_discount_price,
// //   });

// //   const handelEdit = async (e) => {
// //     e.preventDefault();
// //     const payload = {
// //       title: e.target.title.value,
// //       description: e.target.description.value,
// //       promo_code: e.target.promo_code.value,
// //       minimum_claim_price: parseInt(e.target.minimum_claim_price.value),
// //       terms_condition: e.target.terms_condition.value,
// //       promo_discount_price: parseInt(e.target.promo_discount_price.value),
// //       imageUrl: imageUrl,
// //     };
// //     const config = {
// //       headers: {
// //         "Content-Type": "application/json",
// //         apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
// //         Authorization: `Bearer ${localStorage.getItem("token")}`,
// //       },
// //     };
// //     try {
// //       const response = await axios.post(
// //         `https://travel-journal-api-bootcamp.do.dibimbing.id /api/v1/update-promo/${item.id}`,
// //         payload,
// //         config
// //       );

// //       toast.success("Promo created successfully!");
// //       console.log(response.data.data);
// //     } catch (error) {
// //       toast.error("Failed to create promo!");
// //       console.error(error.response);
// //     }
// //   };
// //   const toggleSidebar = () => {
// //     setIsSidebarOpen(!isSidebarOpen);
// //   };
// //   return (
// //     <div className="w-full h-[1024px] relative overflow-hidden flex flex-row items-start justify-start pt-0 pb-[29.4px] pr-[18px] pl-0 box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-xl text-indianred font-body-2-regular mq825:pl-6 mq825:pr-6 mq825:box-border mq450:h-auto bg-white">
// //       <ToastContainer />
// //       {isSidebarOpen && (
// //         <div className="w-[180px] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border relative mq825:hidden">
// //           <SideBar toggleSidebar={toggleSidebar} />
// //         </div>
// //       )}
// //       {!isSidebarOpen && (
// //         <button
// //           className="fixed z-20 p-2 text-white rounded bg-yellowgreen-200 top-10 left-4"
// //           onClick={toggleSidebar}
// //         >
// //           <img src="/images/logo.png" alt="Open" className="w-10 h-10" />
// //         </button>
// //       )}
// //       <div
// //         className={`flex-1 flex flex-col items-start justify-start pt-[31px] px-0 pb-0 box-border ${
// //           isSidebarOpen ? "max-w-[calc(100%_-_278px)]" : "max-w-full"
// //         } mq825:max-w-full`}
// //       >
// //         <div className="self-stretch flex flex-col justify-start gap-[32px] max-w-full pl-24">
// //           <div className="w-[1400px] flex flex-row items-start justify-end py-0 px-8 box-border max-w-full bg-slate-400 rounded-xl pb-4 pt-4">
// //             <div className="flex-1 flex flex-row items-end justify-between py-0 pr-0 pl-px box-border max-w-full gap-[20px] mq450:flex-wrap">
// //               <div className="flex flex-col items-start justify-start">
// //                 <b className="relative tracking-[0.15px] leading-[150%] font-semibold inline-block min-w-[121px] mq450:text-base mq450:leading-[24px]">
// //                   Hello
// //                 </b>
// //                 <div className="relative text-sm tracking-[0.25px] leading-[150%] text-neutral-70 inline-block min-w-[106px] z-[1]">
// //                   Have a nice day
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
// //             <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-md h-[850x]">
// //               <h2 className="mt-2 mb-2 text-2xl font-semibold text-center text-orange-600">
// //                 Create Promo
// //               </h2>
// //               <form>
// //                 <div className="flex mb-4">
// //                   <div className="w-1/2 mr-4">
// //                     <label
// //                       htmlFor="title"
// //                       className="block mb-2 font-bold text-gray-700"
// //                     >
// //                       Title
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="title"
// //                       name="title"
// //                       value={formData.title}
// //                       onChange={handleChange}
// //                       className="w-full p-2 border rounded"
// //                       placeholder="Example: Promo Hiking Family"
// //                     />
// //                   </div>
// //                   <div className="w-1/2">
// //                     <label
// //                       htmlFor="image"
// //                       className="block mb-2 font-bold text-gray-700"
// //                     >
// //                       Image
// //                     </label>
// //                     <input
// //                       type="file"
// //                       id="image"
// //                       name="imageUrl"
// //                       onChange={handleFileChange}
// //                       className="w-full p-2 border rounded"
// //                     />
// //                     <button
// //                       type="button"
// //                       onClick={handleUpload}
// //                       className="px-4 py-2 mt-2 text-white bg-green-500 rounded"
// //                     >
// //                       Upload Image
// //                     </button>
// //                     {imageUrl && (
// //                       <div className="mt-4">
// //                         <p>Image URL: {imageUrl}</p>
// //                         <img
// //                           src={imageUrl}
// //                           alt="Uploaded"
// //                           className="w-32 h-32 mt-2"
// //                         />
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //                 <div className="mb-2">
// //                   <label className="block mb-2 font-bold text-gray-700">
// //                     Description
// //                   </label>
// //                   <textarea
// //                     id="description"
// //                     name="description"
// //                     className="w-full p-2 border rounded"
// //                     value={formData.description}
// //                     onChange={handleChange}
// //                     placeholder="Describe the promo trip"
// //                   ></textarea>
// //                 </div>
// //                 <div className="mb-2">
// //                   <label className="block mb-2 font-bold text-gray-700">
// //                     Promo Code
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="promo_code"
// //                     name="promo_code"
// //                     value={formData.promo_code}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border rounded"
// //                     placeholder="Example: HIKINGFAMILY"
// //                   />
// //                 </div>
// //                 <div className="mb-2">
// //                   <label className="block mb-2 font-bold text-gray-700">
// //                     Minimum Claim Price
// //                   </label>
// //                   <input
// //                     type="number"
// //                     id="minimum_claim_price"
// //                     name="minimum_claim_price"
// //                     value={formData.minimum_claim_price}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border rounded"
// //                     placeholder="Example: 50000"
// //                   />
// //                 </div>
// //                 <div className="mb-2">
// //                   <label className="block mb-2 font-bold text-gray-700">
// //                     Terms & Conditions
// //                   </label>
// //                   <textarea
// //                     id="terms_condition"
// //                     name="terms_condition"
// //                     className="w-full p-2 border rounded"
// //                     value={formData.terms_condition}
// //                     onChange={handleChange}
// //                     placeholder="Please give the terms and conditions"
// //                   ></textarea>
// //                 </div>
// //                 <div className="mb-2">
// //                   <label className="block mb-2 font-bold text-gray-700">
// //                     Promo Discount Price
// //                   </label>
// //                   <input
// //                     type="number"
// //                     name="promo_discount_price"
// //                     id="promo_discount_price"
// //                     value={formData.promo_discount_price}
// //                     onChange={handleChange}
// //                     className="w-full p-2 border rounded"
// //                     placeholder="Example: 50000"
// //                   />
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <button
// //                     type="button"
// //                     onClick={handleSubmit}
// //                     className="px-4 py-2 text-white bg-orange-500 rounded"
// //                   >
// //                     Create Promo
// //                   </button>
// //                   <button
// //                     onClick={() => setIsModalOpen(false)}
// //                     type="button"
// //                     className="px-4 py-2 text-white bg-red-500 rounded"
// //                   >
// //                     Cancel
// //                   </button>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default EditPromo;

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "@/components/SideBar";

const CreateMenu = ({item}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [file, setFile] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    title: item?.title,
    description: item?.description,
    promo_code: "",
    minimum_claim_price: "",
    terms_condition: "",
    promo_discount_price: "",
  });

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
        "Content-Type": "application/json",
        apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI1Zjk2YjU4YS05MjRhLTRjOGYtOWE3Yi0wZGZlYjFmN2IwZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MTk5MDg1NzZ9.ao6_vk2T5Ia3Ez9ezF-T9q0PKOGv7XaIvdh_guEf_os",
      },
    };
    try {
      const response = await axios.post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${item.id}`,
        payload,
        config
      );

      toast.success("Promo created successfully!");
      console.log(response.data.data);
    } catch (error) {
      toast.error("Failed to create promo!");
      console.error(error.response);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-[1024px] relative overflow-hidden flex flex-row items-start justify-start pt-0 pb-[29.4px] pr-[18px] pl-0 box-border gap-[24px] leading-[normal] tracking-[normal] text-left text-xl text-indianred font-body-2-regular mq825:pl-6 mq825:pr-6 mq825:box-border mq450:h-auto bg-white">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-md h-[850x]">
              <h2 className="mt-2 mb-2 text-2xl font-semibold text-center text-orange-600">
                Create Promo
              </h2>
              <form>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-4">
                    <label
                      htmlFor="title"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                      placeholder="Example: Promo Hiking Family"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="image"
                      className="block mb-2 font-bold text-gray-700"
                    >
                      Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="imageUrl"
                      onChange={handleFileChange}
                      className="w-full p-2 border rounded"
                    />
                    <button
                      type="button"
                      onClick={handleUpload}
                      className="px-4 py-2 mt-2 text-white bg-green-500 rounded"
                    >
                      Upload Image
                    </button>
                    {imageUrl && (
                      <div className="mt-4">
                        <p>Image URL: {imageUrl}</p>
                        <img src={imageUrl} alt="Uploaded" className="w-32 h-32 mt-2" />
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block mb-2 font-bold text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="w-full p-2 border rounded"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the promo trip"
                  ></textarea>
                </div>
                <div className="mb-2">
                  <label className="block mb-2 font-bold text-gray-700">
                    Promo Code
                  </label>
                  <input
                    type="text"
                    id="promo_code"
                    name="promo_code"
                    value={formData.promo_code}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Example: HIKINGFAMILY"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-2 font-bold text-gray-700">
                    Minimum Claim Price
                  </label>
                  <input
                    type="number"
                    id="minimum_claim_price"
                    name="minimum_claim_price"
                    value={formData.minimum_claim_price}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Example: 50000"
                  />
                </div>
                <div className="mb-2">
                  <label className="block mb-2 font-bold text-gray-700">
                    Terms & Conditions
                  </label>
                  <textarea
                    id="terms_condition"
                    name="terms_condition"
                    className="w-full p-2 border rounded"
                    value={formData.terms_condition}
                    onChange={handleChange}
                    placeholder="Please give the terms and conditions"
                  ></textarea>
                </div>
                <div className="mb-2">
                  <label className="block mb-2 font-bold text-gray-700">
                    Promo Discount Price
                  </label>
                  <input
                    type="number"
                    name="promo_discount_price"
                    id="promo_discount_price"
                    value={formData.promo_discount_price}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    placeholder="Example: 50000"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="px-4 py-2 text-white bg-orange-500 rounded"
                  >
                    Create Promo
                  </button>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    type="button"
                    className="px-4 py-2 text-white bg-red-500 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;


