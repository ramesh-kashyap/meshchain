import React from "react";

const Register = () => {
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
          <a href="/login">
            <button
              type="submit"
              className="w-[80px] md:w-[100px] mr-2 md:mr-4 py-2 px-2 md:px-4 bg-green-500 text-white rounded-[30px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Log In
            </button>
          </a>
          <button
            type="button"
            className="w-[100px] py-2 px-2 md:px-4 bg-[#171717] text-white rounded-[30px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div
        className="bg-[#FFF] max-w-[385px] rounded-[20px] py-6 px-6 md:px-8 w-full"
        style={{ boxShadow: "rgba(23, 23, 23, 0.25) 0px 4px 88.3px 0px" }}
      >
        <h2 className="text-[28px] font-semibold text-gray-800 text-center mb-2">
          Register
        </h2>
        <p className="text-sm text-[#999] text-center mb-6">
          Welcome back! Log in to stay updated with all your nodes and rewards.
        </p>
        <form action="/registers" method="POST" name="login_frm" id="form-id">
          <input type="hidden" id="country-name" name="country" value="" />
          <input type="hidden" id="dial-code" name="dialCode" value="" />
          <input type="hidden" id="country_iso" name="country_iso" value="1" />
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="input-group mb-3">
              <span className="input-group-text" style={{ paddingLeft: "2px", padding: "7px" }} id="phone_code">+1</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
                name="phone"
                style={{ height: "38px", width: "70%", borderRadius: "12px", borderColor: "grey", background: "transparent" }}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="mt-1 h-[48px] block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              name="email"
              id="emailId"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Referral Code</label>
            <input
              name="sponsor"
              id="sponsor"
              type="text"
              placeholder="Invitation code cannot be empty"
              className="mt-1 h-[48px] block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="mt-1 h-[48px] block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Repeat Password</label>
            <input
              name="password_confirmation"
              id="passwordInput2"
              type="password"
              placeholder="Confirm password"
              className="mt-1 h-[48px] block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Captcha Code</label>
            <input
              type="text"
              className="mt-1 h-[48px] block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              name="captcha"
              placeholder="Captcha Code"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-[30px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
