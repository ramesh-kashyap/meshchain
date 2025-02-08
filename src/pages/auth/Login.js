import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google'; // Make sure you have this import for Google login
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [message, setMessage] = useState(""); // State for message
  const navigate = useNavigate(); // For navigation
  
  // Handle login for local authentication (username + password)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/api/auth/login", // API endpoint for login
        { username, password } // Sending data (username and password)
      );

      if (response.status === 200) {
        localStorage.setItem("username", response.data.username);
        setMessage("Login successful! Redirecting...");
        setTimeout(() => navigate("/Dashboard"), 1000); // Redirect after 1 second
          }
        } catch (error) {
      console.error("Error during login:", error);
      setMessage(error.response?.data?.error || "Login failed");
        }
  };

  // Handle success after Google login
  const handleLoginSuccess = (response) => {
    console.log("Google Login Success: ", response);
    // You can send the response to the backend for further processing or store user info in localStorage
      };

  // Handle error during Google login
  const responseGoogle = (error) => {
    console.error("Google Login Error:", error);
    setMessage("Google login failed");
  };

  return (
    <div className="flex flex-col items-center justify-center pt-[100px] p-6">
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
          src="upnl/assets/icons/logo.png"
        />
        <div className="flex">
          <button className="w-[80px] md:w-[100px] mr-2 md:mr-4 py-2 px-2 md:px-4 bg-green-500 text-white rounded-[30px] ">
            Log In
          </button>
          <button className="w-[100px] py-2 px-2 md:px-4 bg-[#171717] text-white rounded-[30px] shadow-md ">
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
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                value={username} // Bind value to state
                onChange={(e) => setUsername(e.target.value)} // Update state on change
                placeholder="Enter username"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password} // Bind value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on change
                required
                placeholder="Enter Password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              />
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

        {/* Google Login Button */}
        <div className="mt-6 text-center">
        <GoogleLogin
  onSuccess={handleLoginSuccess}
  onError={responseGoogle}
  flow="auth-code"
/>
        </div>

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