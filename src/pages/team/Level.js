import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../Requests/Api";

const Level = () => {
    const [level, setLevel] = useState([]);
    const [error, setError] = useState("");
   
    useEffect(() => {
        fetchteam();
    }, []);


    const fetchteam = async () => {
        const token = localStorage.getItem("token"); // Get JWT Token
        console.log("Token from LocalStorage:", token); // Debugging

        if (!token) {
            setError("User not authenticated!");
            return;
        }
        try {
            const data2 ={token:token};
            const response =await Api.post('auth/list',data2);                
            setLevel(response.data);
            // console.log(response.data)
        } catch (err) {
            setError(err.response?.data?.error || "Error fetching income");
        }
    };


    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="w-full mt-10 flex justify-center text-primary">
                <div className="w-full max-w-[1440px] rounded-lg">
                    <div className="flex justify-between mb-4 items-center"></div>
                    <div className="bg-white mb-3 p-4 rounded-[16px] font-semibold text-gray-600 text-center">
                        <div className="hidden md:grid grid-cols-5 lg:grid-cols-5">
                            <div className="text-left">Generation Data</div>
                            <div className="hidden lg:inline-block">Numbers Users</div>
                            <div>Cumulative Income</div>
                            <div>Cumulative Withdrawal</div>
                            <div>Cumulative Yield</div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden">
                            <div className="text-left">Team Generation</div>
                            <div className="text-right">Total Members</div>
                            <div className="text-right hidden sm:block">Today Rewards</div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {/* Static content instead of mapping */}
                        <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                            <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 items-center">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">1 generation data</p>
                                    </div>
                                </div>
                                <p className="hidden lg:block text-sm text-center font-medium">1/1</p>
                                <div className="flex justify-center">
                                    <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">0.0</span>
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-sm w-fit text-center px-3">0.00</p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-sm w-fit text-center px-3 bg-[#F1F1F1] rounded-full">0.00</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden items-center">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">1 generation data</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">1/1</span>
                                </div>
                            </div>
                        </div>
                        {/* Repeat the above block for additional static entries */}
                        <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                            <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 items-center">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">2 generation data</p>
                                    </div>
                                </div>
                                <p className="hidden lg:block text-sm text-center font-medium">1/1</p>
                                <div className="flex justify-center">
                                    <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">0.0</span>
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-sm w-fit text-center px-3">0.00</p>
                                </div>
                                <div className="flex justify-center">
                                    <p className="text-sm w-fit text-center px-3 bg-[#F1F1F1] rounded-full">0.00</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden items-center">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">2 generation data</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">1/1</span>
                                </div>
                            </div>
                        </div>
                        {/* Add more static entries as needed */}
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="dashboard">
                    <img alt="Overview Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-overview.svg" />
                    <span className="text-xs mt-1 text-gray-400">Overview</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="Node">
                    <img alt="My Nodes Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-nodes.svg" />
                    <span className="text-xs mt-1 text-gray-400">Nodes</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="team">
                    <img alt="Referrals Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-referrals.svg" />
                    <span className="text-xs mt-1 text-gray-400">Referrals</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="wallet">
                    <img alt="Wallet Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" />
                    <span className="text-xs mt-1 text-green-500">Wallet</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="Profile">
                    <img alt="Profile Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" />
                    <span className="text-xs mt-1 text-green-500">Profile</span>
                </a>
            </div>
        </div>
    );
};

export default Level;