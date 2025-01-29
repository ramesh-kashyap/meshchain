import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Username:', username, 'Password:', password);
    navigate('/dashboard'); // Redirect after login
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-[#FFF] max-w-[385px] rounded-[20px] py-6 px-6 md:px-8 w-full shadow-lg">
      <h2 className="text-[28px] font-semibold text-gray-800 text-center mb-2">Log In</h2>
      <p className="text-sm text-[#999] text-center mb-6">
        Welcome back! Log in to stay updated with all your nodes and rewards.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter Password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <i className={`fa ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`} style={{ fontSize: '20px' }}></i>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <a className="text-sm text-[#999] hover:text-[#999]" href="/forgot-password">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full h-[46px] py-2 px-4 bg-green-500 font-medium text-white rounded-[30px] shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Log In
        </button>
      </form>
      <div className="mt-6 text-center">
        <span className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a className="text-gray-800 underline text-[14px] font-semibold decoration-solid" href="/register">
            Sign Up
          </a>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;