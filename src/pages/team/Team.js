import React from 'react';

const Team= () => {
    const copyToClipboard = () => {
        const textToCopy = document.getElementById('textToCopy').innerText;
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
            <div className="w-full mt-10 flex justify-center text-primary">
                <div className="w-full max-w-[1440px] rounded-lg">
                    <div className="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-5 rounded-[16px] flex flex-col items-left">
                            <div className="flex mb-[14px]">
                                <div className="bg-green-100 rounded-full p-2">
                                    <img alt="Total Rewards Icon" loading="lazy" width="32" height="32" src="upnl/assets/icons/stats_reward.svg" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium mb-1">Total Members</h3>
                                <div className="flex items-baseline">
                                    <p className="text-[32px] font-semibold mr-2" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                                        <span>5</span>
                                    </p>
                                    <p className="text-secondary">Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-[16px] max-h-[226px] h-full flex flex-col">
                            <div className="flex items-center justify-between w-full mb-[14px]">
                                <div className="bg-blue-100 rounded-full p-2">
                                    <img alt="Today's Rewards Icon" loading="lazy" width="32" height="32" src="upnl/assets/icons/icon_total_rewards.svg" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-medium mb-1">Total Valid</h3>
                                <div className="flex items-baseline">
                                    <p className="text-[32px] font-semibold mr-2" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                                        <span>4</span>
                                    </p>
                                    <p className="text-secondary">Members</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 h-full rounded-[16px] flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-center mb-[14px]">
                                    <h3 className="text-[20px] font-medium text-primary">Referrals</h3>
                                    <button className="text-sm flex items-center h-[32px] px-4 py-1 rounded-[22px] bg-[#F1F1F1]">
                                        <img alt="Filter Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/users.svg" />
                                        <p className="pl-3 font-semibold text-[16px]">0</p>
                                    </button>
                                </div>
                            </div>
                            <button className="flex rounded-[24px] justify-center items-center align-center border border-[#F1F1F1] text-[#373737] bg-[#F9F9F9] h-[36px] py-2 px-3" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                                <p className="mr-3" id="textToCopy">11223344</p>
                                <img alt="Copy Icon" loading="lazy" width="16" height="16" onClick={copyToClipboard} src="upnl/assets/icons/copy_clipboard.svg" />
                            </button>
                            <button className="mt-1 text-[#00C076] font-medium">Copy referral link</button>
                        </div>
                    </div>

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
                        {[1, 2, 3, 4, 5].map((level) => (
                            <a key={level} href={`user/list?selected_level=${level}`}>
                                <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                                    <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 items-center">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">{level} generation data</p>
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
                                                <p className="text-sm font-medium">{level} generation data</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
                                            <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">1/1</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/dashboard">
                    <img alt="Overview Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-overview.svg" />
                    <span className="text-xs mt-1 text-gray-400">Overview</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/node-power">
                    <img alt="My Nodes Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-nodes.svg" />
                    <span className="text-xs mt-1 text-gray-400">Nodes</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/team">
                    <img alt="Referrals Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-referrals.svg" />
                    <span className="text-xs mt-1 text-gray-400">Referrals</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/wallet">
                    <img alt="Wallet Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" />
                    <span className="text-xs mt-1 text-green-500">Wallet</span>
                </a>
                <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
                    <img alt="Profile Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" />
                    <span className="text-xs mt-1 text-green-500">Profile</span>
                </a>
            </div>
        </div>
    );
};

export default Team;