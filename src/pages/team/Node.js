import { useEffect, useState } from "react";
import axios from "axios";



const Node = () => {


    const [income, setIncome] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchNode = async () => {
            const token = localStorage.getItem("token"); // Get JWT Token
            console.log("Token from LocalStorage:", token); // Debugging
    
            if (!token) {
                setError("User not authenticated!");
                return;
            }
    
            try {
                const response = await axios.get("http://localhost:3002/api/auth/direct-income", {
                    headers: { Authorization: `Bearer ${token}` } // ✅ Correct format
                });
    
                
                setIncome(response.data.data);
                console.log(response)
            } catch (err) {
                setError(err.response?.data?.error || "Error fetching income");
            }
        };
    
        fetchNode();
    }, []);
      
    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="w-full mt-10 flex justify-center text-primary">
                <div className="w-full max-w-[1440px] rounded-lg">
                    <div className="flex justify-between mb-4 items-center">
                        <a href="user/subscribe">
                            <button className="px-3 flex items-center h-[34px] bg-[#171717] rounded-[22px] text-[14px] text-white">
                                <img
                                    alt="Add Node Icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    className="mr-1"
                                    src="/upnl/assets/icons/add_node.svg"
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
                                    src="/upnl/assets/icons/bars-filter.svg"
                                />
                            </button>
                        </div>
                    </div>




                    <div className="bg-white mb-3 p-4 rounded-[16px] font-semibold text-gray-600 text-center">
                        <div className="hidden md:grid grid-cols-5 lg:grid-cols-6">
                            <div className="text-left">Node</div>
                            <div className="hidden lg:inline-block">Unique ID</div>
                            <div>Status</div>
                            <div>Hash Rate</div>
                            <div>Total Uptime</div>
                            <div className="text-right">Today Rewards</div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden">
                            <div className="text-left">Node</div>
                            <div className="text-right">Status</div>
                            <div className="text-right hidden sm:block">Today Rewards</div>
                        </div>
                    </div>


                    {income.length > 0 ? (
                            income.map((income, index) => (



                    <div className="space-y-4"   key={index}>
                        <a href="/nodedetails">
                            <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                                <div className="hidden md:grid grid-cols-5 lg:grid-cols-6 items-center">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                            <img
                                                alt="Node Icon"
                                                loading="lazy"
                                                width="16"
                                                height="16"
                                                src="/upnl/assets/icons/icon-referrals.svg"
                                            />
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium">{income.name}</p>
                                            <p className="text-xs text-[#999999]">{income.type}</p>
                                        </div>
                                    </div>
                                    <p className="hidden lg:block text-sm text-center font-medium">{income.user_id_fk}</p>
                                    <div className="flex justify-center">
                                        <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">{income.status}</span>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-sm w-fit text-center px-3">{income.hash_rate}</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-sm w-fit text-center px-3 bg-[#F1F1F1] rounded-full">{income.total_uptime}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold"><span>0</span></p>
                                        <p className="text-xs">Total: <span>{income.today_reward}</span></p>
                                    </div>
                                </div>

                            </div>
                        </a>
                    </div>


))
) : (
    <p className="text-center text-gray-500">No Income Data Found</p>
)}




                </div>
            </div>
            <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="dashboard">
                    <img
                        alt="overview Icon"
                        loading="lazy"
                        width="20"
                        height="20"
                        src="/upnl/assets/icons/icon-overview.svg"
                    />
                    <span className="text-xs mt-1 text-gray-400">Overview</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="Node">
                    <img
                        alt="my_nodes Icon"
                        loading="lazy"
                        width="20"
                        height="20"
                        src="/upnl/assets/icons/icon-nodes.svg"
                    />
                    <span className="text-xs mt-1 text-gray-400">Nodes</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="team">
                    <img
                        alt="referrals Icon"
                        loading="lazy"
                        width="20"
                        height="20"
                        src="/upnl/assets/icons/icon-referrals.svg"
                    />
                    <span className="text-xs mt-1 text-gray-400">Referrals</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="wallet">
                    <img
                        alt="wallet Icon"
                        loading="lazy"
                        width="20"
                        height="20"
                        className="green-filter"
                        src="/upnl/assets/icons/icon-wallet.svg"
                    />
                    <span className="text-xs mt-1 text-green-500">Wallet</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="Profile">
                    <img
                        alt="profile Icon"
                        loading="lazy"
                        width="20"
                        height="20"
                        className="green-filter"
                        src="/upnl/assets/icons/icon-wallet.svg"
                    />
                    <span className="text-xs mt-1 text-green-500">Profile</span>
                </a>
            </div>
        </div>
    );
};

export default Node;