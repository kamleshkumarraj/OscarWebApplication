import heroImage from '../../assets/ClothingAndBag/heroImage.png'
import Button from './Button'
function HeroSection() {
    const labelArr = ['clothing','hats','bags']
  return (
    <main className="grid md:items-center w-full grid-cols-1 md:grid-cols-2 md:justify-items-center  bg-black gap-[40px] text-[#fff] sm:p-[20px]">
      <div id="details" className='flex flex-col md:mx-auto 2xl:px-[89.05px] xl:px-[80px] lg:px-[70px] md:px-[50px] sm:px-[30px] px-[20px] 2xl:pt-[37.85px] xl:pt-[32px] lg:pt-[28px] md:pt-[25px] sm:pt-[22px] pt-[20px]2xl:pb-[60.11px] xl:pb-[50px] lg:pb-[40px] md:pb-[30px] sm:pb-[25px] pb-[20px] 2xl:gap-[40px] xl:gap-[35px] lg:gap-[25px] md:gap-[20px] sm:gap-[18px] gap-[15px]'>
        <h1 id="heading" className='2xl:text-[46.51px] xl:text-[42px] lg:text-[40px] md:text-[38px] sm:text-[35px] text-[33px] font-[poppins] font-[600] 2xl:leading-[69.85px] xl:leading-[65px] lg:leading-[60px] md:leading-[55px] sm:leading-[50px] leading-[45px] text-left' >Clothing & Bags</h1>
        <p id="description" className='font-[poppins] font-[500] text-left 2xl:leading-[24.1px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[15px] leading-[12px] 2xl:text-[16px] xl:text-[15px] lg:text-[14px] md:text-[13px] sm:text-[12.5px] text-[12px]' >Turn your ideas into unique giveaways, gifts or uniforms.</p>
        <div id="button" className='flex gap-[20px] flex-wrap'>
            {
                labelArr.map((label , idx) =>{
                    return <Button key={idx}
                        label={label}
                    />
                })
            }
        </div>
      </div>
      <div
  id="image"
  className="w-full 2xl:py-[80px] xl:py-[70px] lg:py-[60px] md:py-[50px] sm:py-[40px] py-[30px] mx-auto row-start-1 row-end-2 md:col-start-2 md:col-end-3"
>
  <img
    src={heroImage}
    className="w-[95%]  mx-auto transition-transform duration-500 ease-in-out transform hover:scale-105 hover:rotate-3 hover:translate-y-2 hover:shadow-2xl"
    alt="hero-image"
  />
</div>
    </main>
  )
}

export default HeroSection
