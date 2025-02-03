import React, { useState } from "react";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-[100px] bg-gray-50 p-6">
      <div className="absolute top-6 flex justify-between w-full px-6">
        <img
          alt="MeshNode Logo"
          loading="lazy"
          width="163"
          height="40"
          className="hidden sm:flex"
          src="/upnl/assets/icons/logo_meshchain_full_text.svg"
        />
        <img
          alt="Logo"
          loading="lazy"
          width="40"
          height="40"
          className="flex sm:hidden"
          src="/upnl/assets/icons/logo_meshchain.svg"
        />
        <div className="flex">
          <button className="w-[80px] md:w-[100px] mr-2 md:mr-4 py-2 px-2 md:px-4 bg-green-500 text-white rounded-[30px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
            Log In
          </button>
          <button className="w-[100px] py-2 px-2 md:px-4 bg-[#171717] text-white rounded-[30px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
            Sign Up
          </button>
        </div>
      </div>
      <div className="bg-white max-w-[385px] rounded-[20px] py-6 px-6 md:px-8 w-full shadow-lg">
        <h2 className="text-[28px] font-semibold text-gray-800 text-center mb-2">
          Log In
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Welcome back! Log in to stay updated with all your nodes and rewards.
        </p>
        <form action="/login" method="POST">
          <input
            type="hidden"
            name="_token"
            value="YOUR_CSRF_TOKEN"
          />
          <div className="mb-3">
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <i className={`fa ${passwordVisible ? "fa-eye" : "fa-eye-slash"} text-lg`}></i>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <a className="text-sm text-gray-500 hover:text-gray-600" href="/forgot-password">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full h-[46px] py-2 px-4 bg-green-500 font-medium text-white rounded-[30px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mt-4"
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">
            Don't have an account? 
            <a className="text-gray-800 underline font-semibold" href="/register">
              Sign Up
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
