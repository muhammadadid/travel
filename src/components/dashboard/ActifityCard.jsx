const ActifityCard = ({item}) => {
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
          onClick={() => setIsEditModalOpen(true)}
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
      {/* {isModalOpen && (
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
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Edit Banner</h2>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                &times;
              </button>
            </div>

            <div className="p-4">
              <img
                src={imageUrl}
                alt="Banner Image"
                className="w-full mb-4 rounded-lg"
              ></img>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Choose Banner
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              ></input>
              <button
                onClick={handleUpload}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Upload
              </button>
              <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">
                Banner Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                name="name"
                required
                className="w-56 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></input>
            </div>

            <div className="flex items-center justify-end p-4 border-t">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ActifityCard;
