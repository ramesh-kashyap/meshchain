import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
      username: "",
      email: "",
      password: ""
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Input Change Handler
  const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
      e.preventDefault();
      setMessage("");  // Clear previous success message
      setError("");    // Clear previous error message

      try {
          const response = await fetch("http://localhost:5000/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(user)
          });

          const data = await response.json();

          if (!response.ok) {
              throw new Error(data.error || "Something went wrong");
          }

          setMessage(data.success);
          setUser({ username: "", email: "", password: "" }); // Clear form after success
      } catch (error) {
          setError(error.message);
      }
  };

  return (

    <div className="min-h-screen flex flex-col items-center justify-center pt-[100px] bg-gray-50 p-6">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
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
        <form onSubmit={handleSubmit} name="login_frm" id="form-id">
          {/* <input type="hidden" id="country-name" name="country" value="" />
          <input type="hidden" id="dial-code" name="dialCode" value="" />
          <input type="hidden" id="country_iso" name="country_iso" value="1" /> */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Username </label>
            <div className="input-group mb-3">
              <span className="input-group-text" style={{ paddingLeft: "2px", padding: "7px" }} id="phone_code">+1</span>
              <input
                type="text"
                value={user.username}
                className="form-control"
                name="username"
                onChange={handleChange}
                style={{ height: "38px", width: "70%", borderRadius: "12px", borderColor: "grey", background: "transparent" }}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={user.email}
              onChange={handleChange}
              className="mt-1 h-[48px] block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              name="email"
              id="emailId"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              id="sponsor"
              type="password"
              value={user.password}
              onChange={handleChange}
              className="mt-1 h-[48px] block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="mt-1 h-[48px] block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
            />
          </div> */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Repeat Password</label>
            <input
              name="password_confirmation"
              id="passwordInput2"
              type="password"
              placeholder="Confirm password"
              className="mt-1 h-[48px] block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
            />
          </div> */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">Captcha Code</label>
            <input
              type="text"
              className="mt-1 h-[48px] block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              name="captcha"
              placeholder="Captcha Code"
            />
          </div> */}
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
