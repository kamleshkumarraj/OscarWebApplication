import recent_img_1 from '../../assets/EmptyWishlist/recent-img-1.svg'
import recent_img_2 from '../../assets/EmptyWishlist/recent-img-2.svg'
import recent_img_3 from '../../assets/EmptyWishlist/recent-img-3.svg'
import recent_img_4 from '../../assets/EmptyWishlist/recent-img-4.svg'
import RecentCard from './RecentCard';
function RecentView() {
    const imgArr = [recent_img_1, recent_img_2, recent_img_3, recent_img_4];
    const lable_1Arr = ['White T-Shirt','Dark Green Sweatshirt ....','Levender Sweatshirt ....','Urban jacket with white ....']
    const lable_2Arr = ['Priya’s  Brand','Roboto’s  Brand','Jhanvi’s  Brand','Sagar’s  Brand']
    const priceArr = ['13.00','127.00','133.00','79.00']
  return (
    <div id="recent-view" className="w-full 2xl:p-[60px] xl:p-[65px] lg:p-[40px] md:p-[35px] sm:p-[30px] p-[20px] 2xl:py-[45px] xl:py-[40px] lg:py-[35px] md:py-[30px] sm:py-[25px] py-[25px]">
      <div id="header" className='w-full'>
      <h1 className="font-[DM Sans] font-[700] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] 2xl:text-[37.18px] xl:text-[35px] lg:text-[32px] md:text-[30px] sm:text-[28px] text-[25px] 2xl:leading-[44.49px] xl:leading-[40px] lg:leading-[35px] md:leading-[30px] sm:leading-[25px] leading-[20px] relative text-left before:w-[10px] before:bg-[#8A33FD] before:h-[80%] md:before:left-[-2%] before:left-[-5%] before:top-[50%] before:translate-y-[-50%] md:left-[2%] left-[5%] before:absolute before:rounded-[10px]">Recently Viewed</h1>
      </div>
        <div id="card-section" className='grid w-full grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-[40px] justify-items-center 2xl:mt-[60px] xl:mt-[50px] lg:mt-[45px] md:mt-[40px] sm:mt-[35px] mt-[30px]'>
            {
                imgArr.map((img,idx) =>{
                    return <RecentCard 
                        key={idx}
                        img={img}
                        lable_1={lable_1Arr[idx]}
                        lable_2={lable_2Arr[idx]}
                        price={priceArr[idx]}
                    />
                })
            }
        </div>
      
    </div>
  )
}

export default RecentView
