import React from "react";
import loginBg from "../assets/login-bg.png";
import logoBg from "../assets/login-logo-bg.png";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center bg-gray-100">
      {/* Left Section (Background Image) */}
      <div className="relative w-[712px] h-[1024px]">
        {/* Background Image */}
        <img
          src={loginBg}
          alt="Background"
          className="absolute w-full h-full object-cover"
        />

        {/* Container for Logo and Text */}
        <div
          className="absolute top-[263px] left-[64px] flex flex-col gap-[10px]"
          style={{ width: "500px", height: "311px", opacity: 1 }}
        >
          {/* Logo Image */}
          <img
            src={logoBg}
            alt="Logo"
            className="w-full h-auto object-contain"
          />

          {/* Text and logo */}
          <p
            className="text-[#FFFFFF] text-center"
            style={{
              fontFamily: "Roboto",
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "28px",
              textAlign: "center",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            Selamat datang di Agreenery, platform
            <br />
            pertanian terintegrasi yang membantu <br />
            Anda meraih hasil panen terbaik.
          </p>
        </div>
      </div>

      {/* Right Section (Empty or Form Content) */}
      <div className="min-h-screen flex flex-col justify-start p-10">
        {/* Placeholder for other content */}
        <div style={{ marginTop: "116px", marginLeft: "168px" }}>
          <h1
            className="text-left text-xl"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "60px",
              textAlign: "left",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            <span className="text-primary-400">Sign In</span> to your account
          </h1>
          <form className="max-w-sm ml-0" style={{ paddingTop: "60px" }}>
            <div className="mb-5">
              <label
                for="email"
                className="font-roboto-700 text-neutral-400 opacity-50"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 :border- bg-neutral-200 opacity-50"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="password"
                className="font-roboto-700 text-neutral-400 opacity-50"
              >
                Password
              </label>
              <input
                placeholder="input password"
                type="password"
                id="password"
                className="text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 :border- bg-neutral-200 opacity-50"
                required
              />
            </div>
            <div className="flex justify-between items-center mb-5">
              <label className="text-neutral-400 opacity-50 text-right w-full pr-4">
                Remember me
              </label>
              <div className="relative inline-block">
                <input
                  type="checkbox"
                  id="hs-small-solid-switch"
                  className="sr-only peer"
                />
                <div
                  className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 transition-colors duration-200 cursor-pointer"
                  onClick={() =>
                    document.getElementById("hs-small-solid-switch").click()
                  } // Forward click to input
                ></div>
                <div
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 peer-checked:translate-x-5 cursor-pointer"
                  onClick={() =>
                    document.getElementById("hs-small-solid-switch").click()
                  } // Forward click to input
                  style={{ zIndex: "10" }}
                ></div>
              </div>
            </div>

            <div>
              <p className=" text-primary-500">Forgot password?</p>
            </div>

            <button
              type="button"
              className="w-full bg-primary-300 text-white font-semibold py-3 rounded-lg hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 mt-4 text-neutral-100"
            >
              Sign In
            </button>
            <p className=" text-center pt-4">
              Don't have an account?
              <span className=" text-secondary-500"> Sign Up</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
