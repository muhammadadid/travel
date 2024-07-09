const FromActivity = ({item}) => {
  return (
    <div 
    style={{ backgroundImage: `url(${item.imageUrls})` }}
    class="w-[497px] rounded-7xl shrink-0 flex flex-col items-start justify-end py-10 px-6 box-border  bg-cover bg-no-repeat bg-[top] min-h-[661px] max-w-full">
      <div class="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
        <h3 class="m-0 self-stretch relative text-inherit font-medium font-inherit mq450:text-3xl">
          {item.title}
        </h3>
        <div class="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full text-5xl font-rubik">
          <img
            class="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/images/location.png"
          />

          <div class="flex-1 relative inline-block max-w-[calc(100%_-_40px)] mq450:text-lgi">
            {item.address},{item.province}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromActivity;
