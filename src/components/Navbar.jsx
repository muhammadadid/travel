const Navbar = () => {
    return (
        <div class=" top-[0px] left-[0px] w-full flex flex-row items-center justify-between p-8 box-border gap-[20px] max-w-full z-[1] text-xl font-rubik mq450:w-[1217px] fixed bg-opacity-20 ">
            <div class="flex flex-row items-start justify-start">
              <img
                class="h-[50px] w-[50px] relative"
                loading="lazy"
                alt=""
                src="/images/logo.png"
                width={20}
                height={20}
              />
            </div>
            <div class="w-[417px] flex flex-row items-center justify-center gap-[31.8px] max-w-full mq1125:hidden mq450:gap-[16px]">
              <div class="flex flex-col items-center justify-center">
                <a class="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[57px]">
                  Home
                </a>
              </div>
              <div class="flex-1 flex flex-row items-start justify-start">
                <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[70px]">
                  Explore
                </a>
              </div>
              <div class="flex flex-row items-start justify-start">
                <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[55px]">
                  Travel
                </a>
              </div>
              <div class="flex flex-row items-start justify-start">
                <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[42px]">
                  Blog
                </a>
              </div>
              <div class="flex-1 flex flex-row items-start justify-start">
                <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[66px]">
                  Pricing
                </a>
              </div>
            </div>
            <div class="flex flex-row items-center justify-start gap-[36px] mq450:hidden">
              <a class="[text-decoration:none] relative text-[inherit] inline-block min-w-[52px]">
                Login
              </a>
              <button class="cursor-pointer [border:none] py-5 px-8 bg-greenyellow rounded-xl flex flex-row items-center justify-center whitespace-nowrap hover:bg-yellowgreen-100">
                <a class="[text-decoration:none] relative text-xl font-rubik text-black text-left inline-block min-w-[71px]">
                  Sign up
                </a>
              </button>
            </div>
          </div>
        
    )
}

export default Navbar