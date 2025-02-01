import React from 'react';

const Node = () => {
    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="w-full mt-10 flex justify-center text-primary">
                <div className="w-full max-w-[1440px] rounded-lg">
                    <div className="flex justify-between mb-4 items-center">
                        <a href="http://127.0.0.1:8000/user/subscribe">
                            <button className="px-3 flex items-center h-[34px] bg-[#171717] rounded-[22px] text-[14px] text-white">
                                <img
                                    alt="Add Node Icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    className="mr-1"
                                    src="http://127.0.0.1:8000/upnl/assets/icons/add_node.svg"
                                />
                                New Node
                            </button>
                        </a>
                        <div className="relative">
                            <button className="px-3 h-[34px] bg-white rounded-full shadow">
                                <img
                                    alt="Filter Icon"
                                    loading="lazy"
                                    width="16"
                                    height="16"
                                    src="http://127.0.0.1:8000/upnl/assets/icons/bars-filter.svg"
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
                    <div className="space-y-4">
                        <a href="http://127.0.0.1:8000/user/node_power_data">
                            <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                                <div className="hidden md:grid grid-cols-5 lg:grid-cols-6 items-center">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                            <img
                                                alt="Node Icon"
                                                loading="lazy"
                                                width="16"
                                                height="16"
                                                src="http://127.0.0.1:8000/upnl/assets/icons/icon-referrals.svg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">raj</p>
                                            <p className="text-xs text-[#999999]">Telegram Node</p>
                                        </div>
                                    </div>
                                    <p className="hidden lg:block text-sm text-center font-medium">1236796590</p>
                                    <div className="flex justify-center">
                                        <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">Online</span>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-sm w-fit text-center px-3">0.25 TH/s</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <p className="text-sm w-fit text-center px-3 bg-[#F1F1F1] rounded-full">0 hr, 0 min</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold"><span>0pt</span></p>
                                        <p className="text-xs">Total: <span>0pt</span></p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden items-center">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                            <img
                                                alt="Node Icon"
                                                loading="lazy"
                                                width="16"
                                                height="16"
                                                src="http://127.0.0.1:8000/upnl/assets/icons/icon-referrals.svg"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Sahildewan2</p>
                                            <p className="text-xs text-[#999999]">Telegram Node</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">
                                            <img
                                                alt="Status Icon"
                                                loading="lazy"
                                                width="16"
                                                height="16"
                                                className="mr-1"
                                                src="http://127.0.0.1:8000/upnl/assets/icons/icon-referrals.svg"
                                            />
                                            Online
                                        </span>
                                    </div>
                                    <div className="text-right hidden sm:block">
                                        <p className="text-lg font-semibold"><span>0pt</span></p>
                                        <p className="text-xs">Total: <span>0pt</span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="http://127.0.0.1:8000/user/dashboard">
                    <img
                        alt="overview Icon"
                        loading="lazy"
                        width="20"
                        height="20"
                        src="http://127.0.0.1:8000/upnl/assets/icons/icon-overview.svg"
                    />
                    <span className="text-xs mt-1 text-gray-400">Overview</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="http://127.0.0.1:8000/user/node-power">
                    <img
                        alt="my_nodes Icon"
                        loading="lazy"
                        width="20"
                        height="20"
                        src="http://127.0.0.1:8000/upnl/assets/icons/icon-nodes.svg"
                    />
                    <span className="text-xs mt-1 text-gray-400">Nodes</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="http://127.0.0.1:8000/user/team">
                    <img
                        alt="referrals Icon"
                        loading="lazy"
                        width="20"
                        height="20"
                        src="http://127.0.0.1:8000/upnl/assets/icons/icon-referrals.svg"
                    />
                    <span className="text-xs mt-1 text-gray-400">Referrals</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="http://127.0.0.1:8000/user/wallet">
                    <img
                        alt="wallet Icon"
                        loading="lazy"
                        width="20"
                        height="20"
                        className="green-filter"
                        src="http://127.0.0.1:8000/upnl/assets/icons/icon-wallet.svg"
                    />
                    <span className="text-xs mt-1 text-green-500">Wallet</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="http://127.0.0.1:8000/user/profile-setting">
                    <img
                        alt="profile Icon"
                        loading="lazy"
                        width="20"
                        height="20"
                        className="green-filter"
                        src="http://127.0.0.1:8000/upnl/assets/icons/icon-wallet.svg"
                    />
                    <span className="text-xs mt-1 text-green-500">Profile</span>
                </a>
            </div>
        </div>
    );
};

export default Node;