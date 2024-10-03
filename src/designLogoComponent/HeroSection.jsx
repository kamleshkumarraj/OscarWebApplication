import hero_image from "../assets/oscar_image/heropageImage1.png";
function HeroSection() {
  return (
    <main
      id="hero-section"
      className="grid items-center grid-cols-1 w-full  md:grid-cols-2 md:justify-items-center  bg-black"
    >
      <div
        id="details-section"
        className="2xl:pt-[33.55px] xl:pt-[30px] lg:pt-[28px] md:pt-[25px] sm:pt-[22px] pt-[20px] 2xl:px-[78.93px] xl:px-[75px] lg:px-[73px] md:px-[60px] sm:px-[45px] px-[30px] 2xl:pb-[53.28px] xl:pb-[50px] lg:pb-[47.5px] md:pb-[45px] sm:pb-[42px] pb-[40px] 2xl:gap-[23.68px] lg:gap-[15px] sm:gap-[12px] gap-[10px] flex-col flex text-[#ffffff] row-start-2 row-end-3 md:row-start-1 md:row-end-2"
      >
        <h1
          id="header"
          className="font-[poppins] 2xl:text-[41.22px] lg:text-[35px] md:text-[32px] text-[27px] font-[700] 2xl:leading-[61.91px] lg:leading-[57px] md:leading-[53px] leading-[35px] text-left uppercase "
        >
          Let the professionals take it from here
        </h1>

        <p
          id="paragraph"
          className="font-[poppins] 2xl:text-[14.27px] lg:text-[13px] sm:text-[11px] text-[10px] font-[500] 2xl:leading-[21.37px] lg:leading-[18px] sm:leading-[15px] leading-[13px] text-left "
        >
          Our community of trusted designers can create standout designs for
          every stage of your business journey.
        </p>
        <div
          id="btn"
          className="2xl:w-[283.02px] xl:w-[260px] lg:w-[240px] sm:w-[220px] w-[180px] 2xl:h-[62.63px] xl:h-[58px] lg:h-[55px] sm:h-[50px] h-[45px] rounded-[29.33px] bg-[#ffffff] grid place-content-center mt-[20px]"
        >
          <p className="text-[14.27px] font-[700] leading-[21.4px] text-left text-[#000000]">
            choose a product
          </p>
        </div>
      </div>
      <div
  id="img-section"
  className="2xl:py-[30px] lg:py-[20px] md:py-[18px] py-[15px] px-[20px] self-center mx-auto w-full"
>
  <img
    className="w-[97%] h-[503px] transition-transform duration-500 ease-in-out transform hover:scale-105 hover:rotate-3 hover:translate-y-2 hover:shadow-2xl"
    src={hero_image}
    alt="Hero"
  />
</div>
    </main>
  );
}

export default HeroSection;
