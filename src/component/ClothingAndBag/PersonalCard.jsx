
function PersonalCard({img,label}) {
  return (
    <div id="personal-card" className="w-full 2xl:gap-[40px] xl:gap-[25px] lg:gap-[20px] md:gap-[18px] sm:gap-[15px] gap-[15px] flex flex-col items-center">
      <div id="img">
        <img src={img} alt="" />
      </div>
      <div id="para">
        <p className="font-[poppins] font-[500] text-[#000] 2xl:leading-[48.82px] xl:leading-[44px] lg:leading-[40px] md:leading-[36px] sm:leading-[30px] leading-[25px] 2xl:text-[32.55px] xl:text-[28px] lg:text-[25px] md:text-[22px] sm:text-[20px] text-[18px] text-left 2xl:tracking-[2.1px] xl:tracking-[2px] lg:tracking-[1.8px] md:tracking-[1.6px] sm:tracking-[1.5px] tracking-[1px] sm:text-center  ">{label}</p>
      </div>
    </div>
  )
}

export default PersonalCard
