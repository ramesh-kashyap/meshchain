import React, { useEffect, useState } from "react";
import axios from "axios";

const AvailableBalance = ({ userId }) => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/auth/available-balance/${userId}`);
        setBalance(response.data.availableBalance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [userId]);

  return (
    <div>
      <h2>Available Balance</h2>
      {loading ? <p>Loading...</p> : <p>{balance !== null ? `₹${balance}` : "Balance not available"}</p>}
    </div>
  );
};

export default AvailableBalance;
