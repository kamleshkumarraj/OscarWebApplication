import img_1 from '../../assets/images/img-1.svg'
import img_2 from '../../assets/images/img-2.svg'
import img_3 from '../../assets/images/img-3.svg'
import img_4 from '../../assets/images/img-4.svg'
import img_5 from '../../assets/images/img-5.svg'
import img_6 from '../../assets/images/img-6.svg'
import img_7 from '../../assets/images/img-7.svg'
import img_8 from '../../assets/images/img-8.svg'
import img_9 from '../../assets/images/img-9.svg'
import Titleheader from '../titleHeader'

function OscarProduct() {
  const rightImages = [img_1, img_2, img_3, img_4]
  const leftImages = [img_6, img_7, img_8, img_9]
  return (
    <div id="main-section" className="h-full sm:py-10 py-4  font-[DMSans] w-full gap-[4rem] flex flex-col ">
      <Titleheader title="Made by you, #MadeWithOscarPrint" description="We love to see your custom creations. Post a photo on social media and add @OscarPrint and #MadeWithOscarPrint for a chance to be featured here." btn="see all" />
      <div id="product-section" className='w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[.9rem] justify-items-center'>
        <div id="left" className='grid grid-cols-2 grid-rows-2 gap-[.9rem] w-[100%] justify-items-center items-center '> 
          {
            leftImages.map((img , idx) =>{
              return <img src={img} key={idx} alt="images" />
            })
          }
        </div>
        <div id="middle"><img  src={img_5} alt="images" /></div>
        <div id="right" className='grid grid-cols-2 grid-rows-2 gap-[.9rem] w-[100%] justify-items-center items-center '>
          {
            rightImages.map((img,idx) =>{
              return <img src={img} key={idx} alt="images" />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default OscarProduct
