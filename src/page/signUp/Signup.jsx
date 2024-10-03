import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import signup1 from "../../assets/signUp/signup1.webp";
import googleLogo from "../../assets/signUp/google.svg";
import twitterLogo from "../../assets/signUp/twitter.svg";
import hideLogo from "../../assets/signUp/hideLogo.svg";
import visible from "../../assets/signUp/visible.svg";

import { useNavigate } from "react-router-dom";
import Loader from "../../component/Loader";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  //this is will be use latter
  // const [agreeToTerms, setAgreeToTerms] = useState(false);
  // const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

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
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("enter in signup");

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://devenvs.hopto.org/auth/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(response.ok);

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Invalid email or password");
        toast.error(errorData.message || "Invalid email or password");
        return;
      }

      const result = await response.json();
      console.log("Success:", result);
      toast.success("Successfully signed up!");
      navigate("/signin");
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred. Please try again.");
      toast.error("An unexpected error occurred. Please try again.");
    }
  };
  return (
    <>
      {/* <button className="bg-red-600 text-white w-16 px-2 py-3 rounded-lg mx-7 my-3">
        <Link to="/login">Login</Link>
      </button> */}

      <div className="w-full flex justify-center items-center mx-auto my-7">
        <div className="container w-full h-full flex flex-wrap justify-center items-center lg:space-x-14">
          <div className="md:w-[50%]  xl:w-[40%]  h-full hidden lg:flex justify-center items-center ">
            <img
              src={signup1}
              alt=""
              className="w-[1100px] h-full object-contain"
            />
          </div>
          <div className="w-[90%] lg:w-[40%] xl:w-[45%] h-[70%] xl:h-[100%] flex justify-center items-center my-8  p-5  ">
            <div className="flex flex-col space-y-7 w-full">
              <div className="my-6 space-y-2">
                <h1 className="text-4xl font-extrabold">Sign Up</h1>
                <p className="text-gray-400">
                  Sign up for free to access to in any of our products
                </p>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="text-center border border-black py-4 rounded-md cursor-pointer">
                  <button className="text-blue-500 w-full flex justify-center items-center space-x-2 text-xl">
                    <img src={googleLogo} alt="" className="size-6" />
                    <span className="">Continue with Google</span>
                  </button>
                </div>
                <div className="text-center border border-black py-4 rounded-md cursor-pointer">
                  <button className="text-blue-500  flex justify-center items-center space-x-2 w-full text-xl cursor-pointer">
                    <img src={twitterLogo} alt="" className="size-6" />
                    <span className="cursor-pointer">
                      Continue with Twitter
                    </span>
                  </button>
                </div>
              </div>
              <div className="">
                <form action="" onSubmit={(e) => handleSignUp(e)}>
                  <div className="flex flex-col space-y-10 lg:space-y-8 xl:space-y-10 ">
                    <div className="flex flex-col space-y-2 relative">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="designer@gmail.com"
                        className="border border-black px-3 py-2 rounded-md"
                      />
                      <span className="absolute -bottom-6 ml-1 text-red-500 text-[13px]">
                        Error Message
                      </span>
                    </div>
                    <div className="flex flex-col space-y-2 relative ">
                      <div className="flex justify-between items-center ">
                        <label htmlFor="password">Password</label>
                        <div className="flex cursor-pointer">
                          {!showPassword && (
                            <img
                              src={visible}
                              alt="Show Password"
                              className="size-6 mr-2 cursor-pointer"
                              onClick={() => setShowPassword(true)} // Step 2: Show password when clicked
                            />
                          )}
                          {showPassword && (
                            <img
                              src={hideLogo}
                              alt="Hide Password"
                              className="size-6 mr-2 cursor-pointer"
                              onClick={() => setShowPassword(false)}
                            />
                          )}
                        </div>
                      </div>
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******"
                        className="border border-black px-3 py-2 rounded-md"
                      />
                      <span className="ml-1 text-red-500 text-[13px] absolute -bottom-6 lg:-bottom-10 xl:-bottom-6">
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols
                      </span>
                    </div>

                    <div className=" flex flex-col space-y-2 !mt-12 ">
                      <div className="space-x-2">
                        <input type="checkbox" id="tc1" />
                        <label htmlFor="tc1">
                          Agree to our Terms of use and Privacy Policy
                        </label>
                      </div>
                      <div className="space-x-2">
                        <input type="checkbox" id="tc2" />
                        <label htmlFor="tc2">
                          Subscribe to our monthly newsletter
                        </label>
                      </div>
                    </div>

                    <div className=" flex flex-col space-y-2">
                      <button className="bg-[#524bad] w-28 text-white px-6 py-2 rounded-lg cursor-pointer">
                        Sign Up
                      </button>
                      <span>
                        Already have an account?{" "}
                        <Link to={"/login"} className="text-blue-400 underline">
                          Log in
                        </Link>
                      </span>
                    </div>
                  </div>
                  {/* {error && <p className="text-red-500">{error}</p>} */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
