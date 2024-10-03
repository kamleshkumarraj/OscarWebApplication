import banner_img from '../../assets/ClothingAndBag/banner-img.png'
import star from "../../assets/ClothingAndBag/Star.svg"
function Banner() {
  return (
    <div className="relative 2xl:m-[40px] xl:m-[35px] lg:m-[30px] md:m-[28px] sm:m-[25px] pt-[50px] grid grid-cols-1 xl:grid-cols-2 items-end md:items-center bg-gradient-to-r from-[#FAE157] to-[#FFDD57] rounded-lg shadow-lg">
      {/* Star Background Elements */}
      <div className="absolute inset-0 z-0">
        <img className="absolute top-[150px] left-[120px] animate-pulse opacity-80" src={star} alt="star" />
        <img className="absolute top-[520px] left-[220px] w-[6%] animate-pulse opacity-80" src={star} alt="star" />
        <img className="absolute right-[160px] top-[100px] animate-pulse opacity-80" src={star} alt="star" />
        <img className="absolute top-[620px] right-[85px] w-[6%] animate-pulse opacity-80" src={star} alt="star" />
      </div>

      {/* Image Section */}
      <div id="img-section" className="relative z-10 self-end">
        <img className="w-full h-[600px] rounded-lg shadow-md" src={banner_img} alt="banner-image" />
      </div>

      {/* Details Section */}
      <div id="details" className="relative z-10 flex flex-col w-full gap-[20px] xl:gap-[30px] pr-[60px] xl:pr-[120px] p-[20px] sm:p-[40px] md:px-[60px]">
        {/* Heading */}
        <div id="heading">
          <h1 className="font-bold font-[poppins] text-left text-[#333]">
            <span className="inline-block bg-[#ffffff] px-[15px] py-[3px] rounded-lg text-[30px] xl:text-[70px] shadow-md">
              PAYDAY
            </span>
            <br />
            <span className="block mt-[20px] text-[30px] xl:text-[65px] text-[#000]">SALE NOW</span>
          </h1>
        </div>

        {/* Paragraph */}
        <div id="para">
          <p className="font-medium font-[poppins] tracking-wide text-left text-[18px] xl:text-[25px] text-[#555] leading-[30px]">
            Spend minimal $100 and get 30% off voucher code for your next purchase.
          </p>
        </div>

        {/* Terms */}
        <div id="term">
          <h1 className="font-bold font-[poppins] tracking-wide text-left text-[22px] xl:text-[25px] text-[#333] leading-[35px]">
            1 June - 10 June 2021
          </h1>
          <p className="font-light font-[poppins] tracking-wide text-left text-[18px] xl:text-[28px] text-[#666] leading-[30px]">
            *Terms & Conditions apply
          </p>
        </div>

        {/* Button */}
        <div id="bnt" className="rounded-[10px] xl:w-[220px] w-[180px] h-[60px] bg-[#000000] hover:bg-[#333] transition duration-300 ease-in-out transform hover:scale-105 grid place-content-center cursor-pointer shadow-lg">
          <p className="uppercase font-bold font-[poppins] text-center text-[#fff] tracking-wider text-[12px] xl:text-[16px] leading-[28px]">
            Shop Now
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner;
