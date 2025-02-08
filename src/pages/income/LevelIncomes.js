import { useEffect, useState } from "react";
import axios from "axios";

const LevelIncome = () => {
    const [income, setIncome] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchLevelIncome = async () => {
            const token = localStorage.getItem("token"); // Get JWT Token
            console.log("Token from LocalStorage:", token); // Debugging
    
            if (!token) {
                setError("User not authenticated!");
                return;
            }
    
            try {
                const response = await axios.get("http://localhost:3002/api/auth/level-income", {
                    headers: { Authorization: `Bearer ${token}` } // ✅ Correct format
                });
    
                setIncome(response.data.data);
            } catch (err) {
                setError(err.response?.data?.error || "Error fetching income");
            }
        };
    
        fetchLevelIncome();
    }, []);
    
    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="w-full mt-10 flex justify-center text-primary">
                <div className="w-full max-w-[1440px] rounded-lg">
                    <div className="flex justify-between mb-4 items-center">
                        <a href="user/subscribe">
                        {error && <p style={{ color: "red" }}>{error}</p>}

                            <button className="px-3 flex items-center h-[34px] bg-[#171717] rounded-[22px] text-[14px] text-white">
                                <img
                                    alt="Add Node Icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    className="mr-1"
                                    src="upnl/assets/icons/add_node.svg"
                                />
                                raj
                            </button>
                        </a>
                        <div className="relative">
                            <button className="px-3 h-[34px] bg-white rounded-full shadow">
                                <img
                                    alt="Filter Icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    src="upnl/assets/icons/bars-filter.svg"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white mb-3 p-4 rounded-[16px] font-semibold text-gray-600 text-center">
                        <div className="hidden md:grid grid-cols-5 lg:grid-cols-6">
                            <div className="text-left">User ID</div>
                            <div className="hidden lg:inline-block">Amount</div>
                            <div>Commission</div>
                            <div>Remark</div>
                            <div> Time</div>
                            <div className="text-right">Level</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {income.length > 0 ? (
                            income.map((income, index) => (
                                <a href="/nodedetails" key={index}>
                                    <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                                        <div className="hidden md:grid grid-cols-5 lg:grid-cols-6 items-center">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                    <img
                                                        alt="Node Icon"
                                                        loading="lazy"
                                                        width="16"
                                                        height="16"
                                                        src="upnl/assets/icons/icon-referrals.svg"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium">{income.user_id_fk}</p>
                                                </div>
                                            </div>
                                            <p className="hidden lg:block text-sm text-center font-medium">{income.amt}</p>
                                            <div className="flex justify-center">
                                                <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">{income.comm}</span>
                                            </div>
                                            <div className="flex justify-center">
                                                <p className="text-sm w-fit text-center px-3">{income.remarks}</p>
                                            </div>
                                            <div className="flex justify-center">
                                                <p className="text-sm w-fit text-center px-3 bg-[#F1F1F1] rounded-full">{income.ttime}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-xs"><span>{income.level}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No Income Data Found</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LevelIncome;
