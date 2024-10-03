// import React from 'react'

import { Link } from "react-router-dom";

import signup1 from "../../assets/resetPassword/resetpassword.jpeg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import Loader from "../../component/Loader";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    if (!email) {
      setError("Please enter your email.");
      toast.error("invalid email");
      return;
    }

    try {
      const response = await fetch(
        "http://devenvs.hopto.org/auth/request-reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess("A password reset link has been sent to your email.");
        setError("");
        toast.success("Successfully Logged In!");
        navigate("/admin/");
      } else {
        setError(data.message || "Failed to send reset link.");
        toast.error("Invalid email");
        navigate("/reset");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      toast.error(error.message || "Invalid email ");
      navigate("/reset");
    }
  };

  return (
    <>
      {/* <button className="bg-red-600 text-white w-16 px-2 py-3 rounded-lg mx-7 my-3">
        <Link to="/login">Login</Link>
      </button> */}
      <div className="w-full flex justify-center items-center mx-auto">
        <div className="container w-full h-full flex flex-wrap justify-center items-center md:space-x-14">
          <div className="md:w-[50%]  xl:w-[40%]  h-full hidden lg:flex justify-center items-center ">
            <img
              src={signup1}
              alt=""
              className="w-[1100px] h-full object-contain"
            />
          </div>
          <div className="w-[90%] lg:w-[40%] xl:w-[45%] h-[70%] xl:h-[100%] flex justify-center items-center my-8 p-5">
            <div className="flex flex-col space-y-4 w-full">
              <div className="my-6 space-y-2">
                <h1 className="text-4xl font-extrabold">Reset Your Password</h1>
                <p className="text-gray-400">
                  Enter your email and we'll send you a link to reset your
                  password.
                  <br />
                  Please check it.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="">
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
                        We can not find your email.
                      </span>
                    </div>

                    <div className=" flex flex-col space-y-4">
                      <button className="bg-[#524bad] w-28 text-white px-6 py-2 rounded-lg cursor-pointer">
                        Continue
                      </button>
                      <span>
                        Back to{" "}
                        <Link to={"/login"} className="text-blue-400 underline">
                          Log in
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
