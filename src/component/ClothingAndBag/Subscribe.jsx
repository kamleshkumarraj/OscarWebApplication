function Subscribe() {
  return (
    <div id="subscribe" className="2xl:px-[70px] xl:px-[60px] lg:px-[50px] md:px-[40px] sm:px-[30px] px-[20px] w-full 2xl:mt-[70px] xl:mt-[60px] lg:mt-[50px] md:mt-[40px] sm:mt-[30px] mt-[30px] py-[40px] rounded-lg shadow-md">
        <div id="heading">
            <h1 className="font-[Roboto] flex items-center justify-center mr-28  2xl:text-[49.33px] xl:text-[45px] lg:text-[42px] md:text-[38px] sm:text-[35px] text-[30px] font-[600] text-center text-[#333] 2xl:leading-[57.81px] xl:leading-[50px] lg:leading-[45px] md:leading-[40px] sm:leading-[32px] leading-[25px]">
                Subscribe to our Newsletter
            </h1>
        </div>
        <div id="form" className="text-center mt-[20px]">
            <form action="" className="flex gap-[15px] my-[30px] justify-center flex-wrap">
                <div id="email" className="2xl:w-[600px] xl:w-[500px] lg:w-[450px] md:w-[400px] sm:w-[300px] w-[250px]">
                    <input
                        className="focus:outline-none border-[1.5px] border-[#ccc] px-[20px] py-[10px] w-full rounded-full text-[1.2rem] bg-white placeholder-[#888] transition-all duration-300 focus:border-[#000] focus:shadow-lg"
                        type="email"
                        placeholder="Enter your Email Address..."
                    />
                </div>
                <div id="submit" className="2xl:w-[120px] xl:w-[110px] lg:w-[100px] md:w-[90px] sm:w-[80px] w-[70px]">
                    <input
                        className="focus:outline-none border-[1.5px] border-[#000] bg-[#000] text-[#fff] w-full py-[10px] rounded-full text-[1.2rem] cursor-pointer transition-all duration-300 hover:bg-[#333] hover:shadow-lg"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Subscribe;
