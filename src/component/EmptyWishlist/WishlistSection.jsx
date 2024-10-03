import wishlistLogo from "../../assets/EmptyWishlist/wishlist-logo.svg";

function WishlistSection() {
  return (
    <div
      id="wishlist"
      className="flex flex-col items-center px-[50px] 2xl:gap-[60px] xl:gap-[45px] lg:gap-[40px] md:gap-[35px] sm:gap-[30px] gap-[25px] shadow-md 2xl:p-[80px] xl:p-[70px] lg:p-[60px] md:p-[50px] sm:p-[40px] p-[30px] md:col-start-2 md:col-end-4"
    >
      <div id="logo" className="w-[225px] h-[225px]">
        <img className="w-full" src={wishlistLogo} alt="" />
      </div>
      <div id="details" className="flex flex-col gap-[5px]">
        <h1
          className="font-[700] font-[DM Sans] 2xl:text-[45.15px] xl:text-[42px] lg:text-[39px] md:text-[36px] sm:text-[34px] text-[30px] 2xl:leading-[58.79px] xl:leading-[55px] lg:leading-[50px] md:leading-[45px] sm:leading-[40px] leading-[35px] text-center"
          id="heading"
        >
          Your wishlist is empty.
        </h1>
        <p
          className="font-[DM Sans] font-[500] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] text-center 2xl:leading-[26.5px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[15px] leading-[12px] 2xl:text-[21.25px] xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[14px] text-[#807D7E]"
          id="para"
        >
          You don’t have any products in the wishlist yet. You will find a lot
          of interesting products on our Shop page.
        </p>
      </div>
      <div
        id="btn"
        className="2xl:w-[349px] xl:w-[300px] lg:w-[250px] md:w-[220px] sm:w-[200px] w-[170px] h-[68px] bg-[#8A33FD] rounded-[10px] grid place-content-center"
      >
        <p
          className="font-[DM Sans] font-[700] text-[#fff] 2xl:text-[23.9px] xl:text-[21px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] text-center 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[19px] leading-[16px]"
          id="btn-lable"
        >
          Continue Shopping
        </p>
      </div>
    </div>
  );
}

export default WishlistSection;
