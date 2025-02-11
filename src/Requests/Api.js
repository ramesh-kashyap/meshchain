import axios from "axios";

const Api = axios.create({
    baseURL: 'http://localhost:3002/api/', // Ensure this is your API's base URL
    headers: {
        'Content-Type': 'application/json', // Fixed 'Content-type' to 'Content-Type'
    },
});

// Interceptors for requests
Api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Add token to Authorization header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error); // Handle request errors
    }
);

const Api3 = axios.create({
    baseURL: 'http://localhost:3002/api3/withdrawal', // Ensure this is your API's base URL
    headers: {
        'Content-Type': 'application/json', // Fixed 'Content-type' to 'Content-Type'
    },
});
// Function to make a withdrawal request
export const makeWithdrawal = async (withdrawData, token) => {
    try {
      const response = await Api3.post(
        "/withdraw",
        withdrawData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send JWT token in the Authorization header
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  };
// Interceptors for responses
Api.interceptors.response.use(
    (response) => response, // Pass through successful responses
    (error) => {
        // Check if the response status is 401 (Unauthorized)
        if (error.response && error.response.status === 401) {
            window.location.href = '/login'; // Redirect to login page
        }
        return Promise.reject(error); // Handle other response errors
    }
);
const Api2 = axios.create({
    baseURL: 'http://localhost:3002', // Make sure this is the correct backend port
  });
export const googleAuth = (code) => Api2.get(`api/google?code=${code}`);
export default Api;
