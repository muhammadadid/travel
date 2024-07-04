const CardCategory = ({ item }) => {
    return (
        <div class="overflow-x-auto flex flex-col items-start justify-start py-0 px-0 gap-6 max-w-full">
        
        <div class="flex bg-white rounded-xl shadow-lg">
          <div class="relative">
            <img class="w-350 h-400 md:h-96 object-cover rounded-t-xl" loading="lazy" alt="" src={item.imageUrl} 
            width={340}
            height={400}
            />
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center rounded-xl">
              <h3 class="text-lg md:text-2xl font-medium">{item.name}</h3>
            </div>
          </div>
        </div>
      </div>
      
  );
};
  export default CardCategory;