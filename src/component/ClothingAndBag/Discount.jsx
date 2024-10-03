import dist_1 from '../../assets/ClothingAndBag/dis-image-1.svg'
import dist_2 from '../../assets/ClothingAndBag/dis-image-2.svg'
import dist_3 from '../../assets/ClothingAndBag/dis-image-3.svg'
import dist_4 from '../../assets/ClothingAndBag/dis-image-4.svg'
import dist_5 from '../../assets/ClothingAndBag/dis-image-5.svg'
import dist_6 from '../../assets/ClothingAndBag/dis-image-6.svg'
function Discount() {
    const imgArr = [dist_1, dist_2, dist_3 , dist_4,dist_5,dist_6]
  return (
    <div id="discount" className="2xl:px-[70px] xl:px-[60px] lg:px-[50px] md:px-[40px] sm:px-[30px] px-[20px] w-full">
      <div id="heading">
        <h1 className="2xl:text-[49.33px] xl:text-[45px] lg:text-[42px] md:text-[40px] sm:text-[35px] text-[32px] 2xl:leading-[57.81px] xl:leading-[52px] lg:leading-[47px] md:leading-[42px] sm:leading-[38px] leading-[35px] font-[600] font-[Roboto] text-center 2xl:mt-[70px] xl:mt-[60px] lg:mt-[50px] md:mt-[40px] sm:mt-[30px] mt-[30px]">Follow products and discounts on Instagram</h1>
      </div>
      <div id="image-section" className=" grid grid-cols-2 lg:grid-cols-6 sm:grid-cols-3 gap-[20px] 2xl:my-[50px] xl:mt-[45px] lg:mt-[40px] md:mt-[35px] sm:mt-[30px] mt-[20px] mx-auto">
        {
            imgArr.map((img,  idx) =>{ 
                return <div id="img" key={idx} className='w-full'>
                  <img className='w-full' src={img}  alt="discount_iamge" />
                </div>
            })
        }

      </div>
    </div>
  )
}

export default Discount
