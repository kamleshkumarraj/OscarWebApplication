import React, { useState, useEffect } from "react";
// import newpasswordImg from "../assets/oscar_image/newpassword.png";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create_newpassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tokenFromURL = queryParams.get("token");

    if (tokenFromURL) {
      setToken(tokenFromURL);
    }
    const loadContent = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating data fetch or image loading)
    }, 1000);

    return () => clearTimeout(loadContent); // Cleanup timeout on component unmount
  }, [location]);

  if (loading) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center ">
        <Loader />
      </div>
    ); // Render Loader component while loading
  }
  const handleApiSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error("Passwords do not match");
      navigate("/signin");
      return;
    }

    try {
      const response = await fetch(
        "http://devenvs.hopto.org/auth/reset-password-set-verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, newPassword: password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("reset password successfully");
        navigate("/signin");
      } else {
        // Handle error (e.g., show error message from server)
        setError(data.message || "An error occurred");
        toast.error(data.message || "An error occurred");
        navigate("/create-new-password");
      }
    } catch (err) {
      setError("Failed to reset password. Please try again.");
      toast.error("An error occurred");
      navigate("/create-new-password");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full lg:gap-10 gap-4">
      <div className="pt-10 lg:pt-20 lg:pl-40 flex justify-center lg:justify-start">
        <img
          className="w-[250px] md:w-[300px] lg:w-[400px]"
          src="data:image/png;base64,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"
          alt="New Password"
        />
      </div>
      <div className="flex-1 pt-10 lg:pt-16">
        <h1 className="text-[24px] md:text-[28px] lg:text-[33.55px] font-black leading-[1.2] md:leading-[1.2] lg:leading-[50.32px] tracking-[0.02em] text-left font-poppins">
          Create New Password
        </h1>

        <p className="mt-2 text-[14px] md:text-[15.79px] leading-[20px] md:leading-[20.55px] tracking-[0.02em] text-left font-dm-sans">
          Your new password must be different from previous used passwords.
        </p>

        <form onSubmit={handleApiSubmit}>
          <div className="relative mt-6 w-full lg:w-[559.45px]">
            <input
              id="token-new"
              placeholder="token"
              value={token}
              className="block w-full h-[40px] md:h-[54.57px] p-[10px] md:p-[15.79px_19.73px] border-[0.99px] border-solid border-[#666666CC] rounded-[7.89px] placeholder:text-gray-500"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </button>
          </div>

          <div className="relative mt-6 w-full lg:w-[559.45px]">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="block w-full h-[40px] md:h-[54.57px] p-[10px] md:p-[15.79px_19.73px] border-[0.99px] border-solid border-[#666666CC] rounded-[7.89px] placeholder:text-gray-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </button>
          </div>

          <div className="relative mt-6 w-full lg:w-[559.45px]">
            <input
              id="confirm-password"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="block w-full h-[40px] md:h-[54.57px] p-[10px] md:p-[15.79px_19.73px] border-[0.99px] border-solid border-[#666666CC] rounded-[7.89px] placeholder:text-gray-500"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? (
                <i className="fas fa-eye"></i>
              ) : (
                <i className="fas fa-eye-slash"></i>
              )}
            </button>
          </div>

          <button className="mt-7 inline-flex items-center justify-center w-full md:w-[164.78px] h-[40px] md:h-[54.57px] p-[10px] md:p-[15.79px] gap-[11.84px] rounded-[7.89px] bg-[#524BAD] text-white cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#3e3b9e] hover:shadow-lg">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create_newpassword;
