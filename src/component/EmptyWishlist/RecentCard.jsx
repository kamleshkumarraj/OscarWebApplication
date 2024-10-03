
function RecentCard({img , lable_1 , lable_2 , price}) {
  return (
    <div id="recent-card" className="w-full flex flex-col gap-[20px]">
      <div id="img" className="w-full">
        <img className="w-full" src={img} alt="image-recent" />
      </div>
      <div id="details" className="flex items-center justify-between w-full">
        <div id="left">
            <h1 className="font-[DM Sans] font-[700] lext-left 2xl:text-[21.25px] xl:text-[20px] lg:text-[18px] md:text-[17px] sm:text-[15px] text-[14px] 2xl:leading-[27.66px] xl:leading-[25px] lg:leading-[22px] md:leading-[18px] sm:leading-[15px] leading-[12px]" id="title">{lable_1}</h1>
            <p className="font-[DM Sans] font-[500] text-left 2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] leading-[14px] text-[#807D7E]" id="des">{lable_2}</p>
        </div>
        <div id="right" className=" px-[8px] py-[5px] bg-[#00000017] rounded-[8px]">
            <p className="font-[DM Sans] font-[700] text-center 2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px]" id="price">${price}</p>
        </div>
      </div>
    </div>
  )
}

export default RecentCard
