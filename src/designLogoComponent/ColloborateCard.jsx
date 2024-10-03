function ColloborateCard({ img, label }) {
  return (
    <div className="" id="colloborate-card">
      <div
        id="img-section"
        className="2xl:w-[365.07px] xl:w-[310px] lg:w-[280px] sm:w-[250px] w-[230px] mx-auto"
      >
        <img className="w-full" src={img} alt="" />
      </div>

      <div
        id="details"
        className="2xl:mt-[80px] xl:mt-[60px] md:mt-[50px] sm:mt-[30px] mt-[10px]"
      >
        <p className="font-[poppins] 2xl:text-[26.64px] lg:text-[20px] sm:text-[18px] text-[16px] font-[500] 2xl:leading-[39.96px] xl:leading-[35px] lg:leading-[30px] sm:leading-[25px] leading-[20px]  lg:tracking-[2.96px] tracking-[1.5px] text-center ">
          {label}
        </p>
      </div>
    </div>
  );
}

export default ColloborateCard;
