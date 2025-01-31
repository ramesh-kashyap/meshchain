import React from 'react';

const Team= () => {
    const copyToClipboard = () => {
        const textToCopy = document.getElementById('textToCopy').innerText;
        navigator.clipboard.writeText(textToCopy);
    };

    return (
        <div id="__next">
            <div className="Toastify"></div>
            <div className="w-full h-screen bg-gray-100 flex justify-center">
                <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
                    <div className="hidden max-h-screen md:flex flex-col text-black transition-all duration-300 justify-between w-[264px]">
                        <div>
                            <div className="flex items-center justify-between border-b border-gray-200">
                                <a className="flex items-center py-5 pl-[22px] h-[80px]" href="/Dashboard" style={{ width: '119px' }}>
                                    <img alt="Logo" loading="lazy" width="163" height="40" decoding="async" src="upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '150px' }} />
                                </a>
                            </div>

                            <nav className="my-5 px-5 text-sm font-medium text-[#555]">
                                <div className="text-gray-400 text-xs mb-2">MENU</div>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md bg-green-500 text-white" href="/Dashboard">
                                    <img alt="overview Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon-overview_active.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Overview</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Nodepower">
                                    <img alt="my_nodes Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Nodes</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Team">
                                    <img alt="referrals Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Referrals</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Wallet">
                                    <img alt="wallet Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Wallet</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/Profile">
                                    <img alt="profile Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon-profile.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Profile</span>
                                </a>
                            </nav>
                        </div>
                        <footer className="my-5 px-5 text-sm font-medium text-[#555] hidden md:block">
                            <div className="text-gray-400 text-xs mb-2">FOLLOW US</div>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="X.com Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon_twitter.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">X.com</span>
                            </a>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="Telegram Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon_telegram_2.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">Telegram</span>
                            </a>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="Discord Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon_discord.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">Discord</span>
                            </a>
                            <div style={{ borderTop: '1px solid rgb(241, 241, 241)', margin: '20px 0px' }}></div>
                            <div>
                                <a className="flex items-center py-2 px-3 mb-4 rounded" href="logout" onClick={(e) => { e.preventDefault(); document.getElementById('logout-form').submit(); }}>
                                    <img alt="Contact Us Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/customer-service.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Log out</span>
                                </a>
                                <form id="logout-form" action="logout" method="POST" className="d-none">
                                    <input type="hidden" name="_token" value="Mp8WGPpkCtxtvkezkpwvKGFaP8ckS5wUjCIsgRln" />
                                </form>
                            </div>
                        </footer>
                    </div>
                    <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                        <div className="flex items-center justify-between py-2 mt-5 px-4 md:px-10 lg:px-10 xl:px-20">
                            <a className="md:hidden" href="/">
                                <img alt="Logo" loading="lazy" width="163" height="40" className="max-w-[156px]" src="upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '50px' }} />
                            </a>
                            <div className="w-full flex flex-row justify-end md:justify-between">
                                <div className="flex items-center h-[38px] text-gray-800 font-medium">
                                    <a className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3" href="user/team">
                                        <div className="flex items-center rounded-full pl-3 text-sm">
                                            <img alt="User  Avatar" loading="lazy" width="16" height="16" className="mr-3" src="upnl/assets/icons/icon_user_add.svg" style={{ color: 'transparent' }} />
                                            <span>11223344</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="relative flex items-center space-x-2 font-semibold">
                                    <span className="hidden lg:inline text-xl">Hello, Bernila!</span>
                                    <button>
                                        <div className="flex items-center justify-center w-[40px] h-[38px] rounded-full mx-auto text-[24px] font-semibold" style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)' }}>B</div>
                                    </button>
                                    <div className="hidden md:inline-block">
                                        <div className="relative inline-block text-[16px] font-bold">
                                            <button className="flex p-2 items-center bg-white border justify-center align-center h-[38px] w-[60px] rounded-[20px] hover:bg-gray-200 focus:outline-none">EN</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
                            <div className="w-full mt-10 flex justify-center text-primary">
                                <div className="w-full max-w-[1440px] rounded-lg">
                                    <div className="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-white p-5 rounded-[16px] flex flex-col items-left">
                                            <div className="flex mb-[14px]">
                                                <div className="bg-green-100 rounded-full p-2">
                                                    <img alt="Total Rewards Icon" loading="lazy" width="32" height="32" src="upnl/assets/icons/stats_reward.svg" style={{ color: 'transparent' }} />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-medium mb-1">Total Members</h3>
                                                <div className="flex items-baseline">
                                                    <p className="text-[32px] font-semibold mr-2" style={{ fontFamily: 'ClashDisplay-Semibold' }}><span>5</span></p>
                                                    <p className="text-secondary">Members</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-5 rounded-[16px] max-h-[226px] h-full flex flex-col">
                                            <div className="flex items-center justify-between w-full mb-[14px]">
                                                <div className="bg-blue-100 rounded-full p-2">
                                                    <img alt="Today's Rewards Icon" loading="lazy" width="32" height="32" src="upnl/assets/icons/icon_total_rewards.svg" style={{ color: 'transparent' }} />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-medium mb-1">Total Valid</h3>
                                                <div className="flex items-baseline">
                                                    <p className="text-[32px] font-semibold mr-2" style={{ fontFamily: 'ClashDisplay-Semibold' }}><span>4</span></p>
                                                    <p className="text-secondary">Members</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-5 h-full rounded-[16px] flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-center mb-[14px]">
                                                    <h3 className="text-[20px] font-medium text-primary">Referrals</h3>
                                                    <button className="text-sm flex items-center h-[32px] px-[20px] py-1 rounded-[22px] bg-[#F1F1F1]">
                                                        <img alt="Filter Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/users.svg" style={{ color: 'transparent' }} />
                                                        <p className="pl-3 font-semibold text-[16px]">0</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <button className="flex rounded-[24px] justify-center items-center align-center border border-[#F1F1F1] text-[#373737] bg-[#F9F9F9] h-[36px] py-2 px-3" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                                                <p className="mr-3" id="textToCopy">11223344</p>
                                                <img alt="Filter Icon" loading="lazy" width="16" id="copyIcon" onClick={copyToClipboard} src="upnl/assets/icons/copy_clipboard.svg" style={{ color: 'transparent' }} />
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
                                        <a href="user/list?selected_level=1">
                                            <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                                                <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 items-center">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                            <i className="fas fa-arrow-right"></i>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">First generation data</p>
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
                                                            <p className="text-sm font-medium">First generation data</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">1/1</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="user/list?selected_level=2">
                                            <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                                                <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 items-center">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                            <i className="fas fa-arrow-right"></i>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">Second generation data</p>
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
                                                            <p className="text-sm font-medium">Second generation data</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">1/1</span>
                                                    </div>
                                                    <div className="text-right hidden sm:block">
                                                        <p className="text-lg font-semibold"><span>0pt</span></p>
                                                        <p className="text-xs">Total: <span>0pt</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="user/list?selected_level=3" style={{ marginTop: '16px', marginBottom: '16px' }}>
                                            <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer my-4">
                                                <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 items-center">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                            <i className="fas fa-arrow-right"></i>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">Third generation data</p>
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
                                                            <p className="text-sm font-medium">Third generation data</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">1/1</span>
                                                    </div>
                                                    <div className="text-right hidden sm:block">
                                                        <p className="text-lg font-semibold"><span>0pt</span></p>
                                                        <p className="text-xs">Total: <span>0pt</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="user/list?selected_level=4">
                                            <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                                                <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 items-center">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                            <i className="fas fa-arrow-right"></i>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">Fourth generation data</p>
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
                                                            <p className="text-sm font-medium">Fourth generation data</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">1/1</span>
                                                    </div>
                                                    <div className="text-right hidden sm:block">
                                                        <p className="text-lg font-semibold"><span>0pt</span></p>
                                                        <p className="text-xs">Total: <span>0pt</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="user/list?selected_level=5">
                                            <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">
                                                <div className="hidden md:grid grid-cols-4 lg:grid-cols-5 items-center">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                                                            <i className="fas fa-arrow-right"></i>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">Fifth generation data</p>
                                                        </div>
                                                    </div>
                                                    <p className="hidden lg:block text-sm text-center font-medium">0/1</p>
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
                                                            <p className="text-sm font-medium">Fifth generation data</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-end">
                                                        <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">0/1</span>
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
                        </div>
                    </div>
                </div>
                <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/dashboard">
                        <img alt="overview Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Overview</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/node-power">
                        <img alt="my_nodes Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Nodes</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/team">
                        <img alt="referrals Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-gray-400">Referrals</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/wallet">
                        <img alt="wallet Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-green-500">Wallet</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
                        <img alt="wallet Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-green-500">Profile</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Team;