import login1 from "../../assets/login/login1.jpeg";
import login2 from "../../assets/login/adminlogo.png";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../component/Loader";

const Login = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating data fetch or image loading)
    }, 1000);

    return () => clearTimeout(loadContent); // Cleanup timeout on component unmount
  }, []);

  if (loading) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center ">
        <Loader />
      </div>
    ); // Render Loader component while loading
  }

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="container w-full h-full flex flex-wrap justify-center items-center md:space-x-8">
          <div className="w-[40%] h-full hidden md:flex justify-center items-center p-5">
            <img src={login1} alt="" className="w-[512px]" />
          </div>
          <div className="w-[90%] md:w-[40%] h-[100%] flex justify-center items-center my-8">
            <form
              onSubmit={(e) => handleLogin(e)}
              action=""
              className="flex flex-col  lg:space-y-8 w-full px-3 mx-auto p-5 "
            >
              <div>
                <div className="flex justify-center items-center p-2">
                  <img
                    src={login2}
                    alt=""
                    className="object-fill w-[170px] h-[70px] md:w-[200px] md:h-[80px] lg:w-[250px] lg:h-[105px] xl:w-[300px] xl:h-[125px]"
                  />
                </div>
                <div className=" flex justify-center items-center ">
                  <div className="flex flex-col space-y-5 w-[90%]  ">
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="email" className="">
                        Email
                      </label>
                      <input
                        type="text"
                        placeholder="johndoe3@gmail.com"
                        className="border border-[#e6e7e8] px-3 py-1 xl:py-3 rounded-md outline-none"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        placeholder="******"
                        className="border border-[#e6e7e8] px-3 py-1 xl:py-3 rounded-md outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-5 ">
                  <div className="w-[86%]">
                    <button
                      type="submit"
                      className="bg-[#0e1422] w-full text-white py-1 xl:py-3 outline-none  rounded-md hover:bg-red-500  active:scale-105 transition-all"
                    >
                      <Link to={"/admin"}>Login</Link>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
