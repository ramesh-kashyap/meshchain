import React from 'react';

const Dashboard = () => {
    return (
        <div id="__next">
            <div className="Toastify"></div>
            <div className="w-full h-screen bg-gray-100 flex justify-center">
                <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
                    <div className="hidden max-h-screen md:flex flex-col text-black transition-all duration-300 justify-between w-[264px]">
                        <div>
                            <div className="flex items-center justify-between border-b border-gray-200">
                                <a className="flex items-center py-5 pl-[22px] h-[80px]" href="user/dashboard" style={{ width: '119px' }}>
                                    <img alt="Logo" loading="lazy" width="163" height="40" decoding="async" src="upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '150px' }} />
                                </a>
                            </div>

                            <nav className="my-5 px-5 text-sm font-medium text-[#555]">
                                <div className="text-gray-400 text-xs mb-2">MENU</div>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md bg-green-500 text-white" href="user/dashboard">
                                    <img alt="overview Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-overview_active.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Overview</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="user/node-power">
                                    <img alt="my_nodes Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Nodes</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="user/team">
                                    <img alt="referrals Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Referrals</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="user/wallet">
                                    <img alt="wallet Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Wallet</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="user/profile-setting">
                                    <img alt="profile Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-profile.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Profile</span>
                                </a>
                            </nav>
                        </div>
                        <footer className="my-5 px-5 text-sm font-medium text-[#555] hidden md:block">
                            <div className="text-gray-400 text-xs mb-2">FOLLOW US</div>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="X.com Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon_twitter.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">X.com</span>
                            </a>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="Telegram Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon_telegram_2.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">Telegram</span>
                            </a>
                            <a className="flex items-center py-2 px-3 mb-4 rounded" href="#">
                                <img alt="Discord Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon_discord.svg" style={{ color: 'transparent' }} />
                                <span className="ml-4">Discord</span>
                            </a>
                            <div style={{ borderTop: '1px solid rgb(241, 241, 241)', margin: '20px 0px' }}></div>
                            <div>
                                <a className="flex items-center py-2 px-3 mb-4 rounded" href="logout" onClick={(e) => { e.preventDefault(); document.getElementById('logout-form').submit(); }}>
                                    <img alt="Contact Us Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/customer-service.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Log out</span>
                                </a>
                                <form id="logout-form" action="logout" method="POST" className="d-none">
                                    <input type="hidden" name="_token" value="WL0AInOQ22EYyW4vVUZppHR5uierBIO17eRWxVZS" />
                                </form>
                            </div>
                        </footer>
                    </div>
                    <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                        <div className="flex items-center justify-between py-2 mt-5 px-4 md:px-10 lg:px-10 xl:px-20">
                            <a className="md:hidden" href="/"><img alt="Logo" loading="lazy" width="163" height="40" decoding="async" className="max-w-[156px]" src="upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '50px' }} /></a>
                            <div className="w-full flex flex-row justify-end md:justify-between">
                                <div className="flex items-center h-[38px] text-gray-800 font-medium">
                                    <a className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3" href="user/team">
                                        <div className="flex items-center rounded-full pl-3 text-sm">
                                            <img alt="User  Avatar" loading="lazy" width="16" height="16" decoding="async" className="mr-3" src="upnl/assets/icons/icon_user_add.svg" style={{ color: 'transparent' }} />
                                            <span> 11223344 </span>
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
                            <div className="w-full mt-10 flex flex-col justify-center text-primary">
                                <div className="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="bg-white p-6 rounded-[16px] flex flex-col items-left">
                                        <div className="flex items-center justify-left mb-4">
                                            <div className="bg-blue-100 rounded-full p-2">
                                                <img alt="Total Rewards Icon" loading="lazy" width="32" height="32" decoding="async" src="upnl/assets/icons/icon_total_rewards.svg" style={{ color: 'transparent' }} />
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-medium mb-1">My Balance</h3>
                                            <div className="flex flex-row md:flex-col xl:flex-row items-baseline">
                                                <p className="text-[40px] md:text-[36px] lg:text-[40px] mr-2 font-semibold" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                                                    <span style={{ fontSize: '25px' }}> 1,600.00 USDT</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-[16px] max-h-[226px] h-full flex flex-col items-left">
                                        <div className="flex items-center justify-left mb-4">
                                            <div className="bg-green-100 rounded-full p-2">
                                                <img alt="Today's Rewards Icon" loading="lazy" width="32" height="32" decoding="async" src="upnl/assets/icons/icon_todays_rewards.svg" style={{ color: 'transparent' }} />
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-medium mb-1"> Total invested </h3>
                                            <div className="flex flex-row md:flex-col xl:flex-row items-baseline">
                                                <p className="text-[40px] md:text-[36px] lg:text-[40px] font-semibold mr-2" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                                                    <span style={{ fontSize: '25px' }}>400.00</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 max-h-[226px] h-full col-span-full lg:col-span-1 rounded-[16px] flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-[20px] font-medium text-black"> Total withdrawn</h3>
                                                <a href="user/node-power">
                                                    <button className="text-sm flex items-center px-3 py-1 rounded-[22px] bg-[#F1F1F1]">Manage <span className="ml-1">→</span></button>
                                                </a>
                                            </div>
                                        </div>
                                        <p className="text-[40px] md:text-[36px] lg:text-[40px] font-semibold mr-2" style={{ fontFamily: 'ClashDisplay-Semibold' }}>
                                            <span style={{ fontSize: '25px' }}>0.00USDT</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="bg-white p-5 rounded-[16px] mt-6 col-span-1 lg:col-span-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-md font-semibold text-black">Reward Stats</h3>
                                        <div className="flex bg-gray-200 rounded-[16px] h-[30px]">
                                            <button className="flex-1 min-w-[87px] px-4 py-1 text-sm font-medium rounded-full text-center bg-black text-white">Daily</button>
                                            <button className="flex-1 px-4 py-1 text-sm font-medium rounded-full text-center">Monthly</button>
                                        </div>
                                    </div>
                                    <div className="w-full h-72">
                                        {/* Chart component can be placed here */}
                                    </div>
                                </div>
                                <div className="col-span-1 lg:col-span-4 bg-white rounded-[16px] mt-6 p-5" style={{ height: '55px' }}>
                                    <h2 className="text-[20px] font-medium text-primary text-center mb-3">Become Resource Provider</h2>
                                    <div className="space-y-4">
                                        <a target="_blank" className="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden" href="https://t.me/vgcube_bot/vgcubeapp">
                                            <div className="absolute top-[-50px] inset-0 flex items-center justify-center">
                                                <div className="w-[140%] h-[150%] rounded-full opacity-30" style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)' }}></div>
                                            </div>
                                            <div className="w-full"><span className="text-[16px] ml-4">Set Up Telegram Node</span></div>
                                            <img alt="Set Up Telegram Node" loading="lazy" width="98" height="98" decoding="async" src="upnl/assets/images/telegram-svgrepo-com.svg" style={{ color: 'transparent', position: 'absolute', bottom: '0px', right: '10px', marginBottom: '-5px', opacity: '0.2' }} />
                                        </a>
                                        <a target="_blank" className="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden" href="https://t.me/vgcube_bot/vgcubeapp">
                                            <div className="absolute top-[-50px] inset-0 flex items-center justify-center">
                                                <div className="w-[140%] h-[150%] rounded-full opacity-30" style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)' }}></div>
                                            </div>
                                            <div className="w-full"><span className="text-[16px] ml-4">Install Browser Extension</span></div>
                                            <img alt="Install Browser Extension" loading="lazy" width="98" height="98" decoding="async" src="upnl/assets/images/server-square-svgrepo-com.svg" style={{ color: 'transparent', position: 'absolute', bottom: '0px', right: '10px', marginBottom: '-5px', opacity: '0.2' }} />
                                        </a>
                                        <a target="_blank" className="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden" href="https://docs.meshchain.ai/getting-started/resource-provider-guide/install-software-node">
                                            <div className="absolute top-[-50px] inset-0 flex items-center justify-center">
                                                <div className="w-[140%] h-[150%] rounded-full opacity-30" style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)' }}></div>
                                            </div>
                                            <div className="w-full"><span className="text-[16px] ml-4">Install Desktop Node</span></div>
                                            <img alt="Install Desktop Node" loading="lazy" width="98" height="98" decoding="async" src="upnl/assets/images/extension-puzzle-sharp-svgrepo-com.svg" style={{ color: 'transparent', position: 'absolute', bottom: '0px', right: '10px', marginBottom: '-5px', opacity: '0.2' }} />
                                        </a>
                                        <a target="_blank" className="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden" href="https://docs.meshchain.ai/getting-started/resource-provider-guide/install-dedicated-node">
                                            <div className="absolute top-[-50px] inset-0 flex items-center justify-center">
                                                <div className="w-[140%] h-[150%] rounded-full opacity-30" style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)' }}></div>
                                            </div>
                                            <div className="w-full"><span className="text-[16px] ml-4">Purchase Hardware Node</span></div>
                                            <img alt="Purchase Hardware Node" loading="lazy" width="98" height="98" decoding="async" src="upnl/assets/images/archive-down-minimlistic-svgrepo-com.svg" style={{ color: 'transparent', position: 'absolute', bottom: '0px', right: '10px', marginBottom: '-5px', opacity: '0.2' }} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                        <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/dashboard">
                            <img alt="overview Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-gray-400">Overview</span>
                        </a>
                        <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/node-power">
                            <img alt="my_nodes Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-gray-400">Nodes</span>
                        </a>
                        <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/team">
                            <img alt="referrals Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-gray-400">Referrals</span>
                        </a>
                        <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/wallet">
                            <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-green-500">Wallet</span>
                        </a>
                        <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
                            <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-green-500">Profile</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;