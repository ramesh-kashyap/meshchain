import React from 'react';

const Header = () => {

    return (
        <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
            <div className="hidden max-h-screen md:flex flex-col text-black transition-all duration-300 justify-between w-[264px]">
                <div>
                    <div className="flex items-center justify-between border-b border-gray-200">
                        <img alt="Logo" loading="lazy" width="163" height="40" decoding="async" src="/upnl/assets/icons/logo.png" style={{ color: 'transparent' }} />
                    </div>
                    <nav className="my-5 px-5 text-sm font-medium text-[#555]">
                        <div className="text-gray-400 text-xs mb-2">MENU</div>
                        <div className="flex items-center py-2 px-3 mb-2 rounded-md bg-green-500 text-white">
                            <img alt="Overview Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-overview_active.svg" style={{ color: 'transparent' }} />
                            <span className="ml-4">Overview</span>
                        </div>
                        <div className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100">
                            <img alt="Nodes Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                            <span className="ml-4">Nodes</span>
                        </div>
                        <div className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100">
                            <img alt="Rewards Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-rewards.svg" style={{ color: 'transparent' }} />
                            <span className="ml-4">Rewards</span>
                        </div>
                        <div className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100">
                            <img alt="Referrals Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                            <span className="ml-4">Referrals</span>
                        </div>
                        <div className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100">
                            <img alt="Wallet Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                            <span className="ml-4">Wallet</span>
                        </div>
                        <div className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100">
                            <img alt="Profile Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon-profile.svg" style={{ color: 'transparent' }} />
                            <span className="ml-4">Profile</span>
                        </div>
                    </nav>
                </div>
                <footer className="my-5 px-5 text-sm font-medium text-[#555] hidden md:block">
                    <div className="text-gray-400 text-xs mb-2">FOLLOW US</div>
                    <div className="flex items-center py-2 px-3 mb-4 rounded">
                        <img alt="X.com Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon_twitter.svg" style={{ color: 'transparent' }} />
                        <span className="ml-4">X.com</span>
                    </div>
                    <div className="flex items-center py-2 px-3 mb-4 rounded">
                        <img alt="Telegram Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon_telegram_2.svg" style={{ color: 'transparent' }} />
                        <span className="ml-4">Telegram</span>
                    </div>
                    <div className="flex items-center py-2 px-3 mb-4 rounded">
                        <img alt="Discord Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/icon_discord.svg" style={{ color: 'transparent' }} />
                        <span className="ml-4">Discord</span>
                    </div>
                    <div style={{ borderTop: '1px solid rgb(241, 241, 241)', margin: '20px 0px' }}></div>
                    <div>
                        <div className="flex items-center py-2 px-3 mb-4 rounded">
                            <img alt="Log Out Icon" loading="lazy" width="16" height="16" decoding="async" src="upnl/assets/icons/customer-service.svg" style={{ color: 'transparent' }} />
                            <span className="ml-4">Log out</span>
                        </div>
                    </div>
                </footer>
            </div>
            <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                <div className="flex items-center justify-between py-2 mt-5 px-4 md:px-10 lg:px-10 xl:px-20">
                    <img alt="Logo" loading="lazy" width="163" height="40" decoding="async" className="max-w-[156px]" src="upnl/assets/icons/logo.png" style={{ color: 'transparent' }} />
                    <div className="w-full flex flex-row justify-end md:justify-between">
                        <div className="flex items-center h-[38px] text-gray-800 font-medium">
                            <div className="flex items-center rounded-full pl-3 text-sm">
                                <img alt="User  Avatar" loading="lazy" width="16" height="16" decoding="async" className="mr-3" src="upnl/assets/icons/icon_user_add.svg" style={{ color: 'transparent' }} />
                                <span>ghj</span>
                            </div>
                            <div className="flex ml-3 items-center justify-center rounded-full bg-gray-200 min-w-8 h-8 text-xs px-2">0</div>
                        </div>
                        <div className="relative flex items-center space-x-2 font-semibold">
                            <span className="hidden lg:inline text-xl">Hello,j </span>
                            <button>
                                <div className="flex items-center justify-center w-[40px] h-[38px] rounded-full mx-auto text-[24px] font-semibold" style={{ background: 'rgb(51, 87, 255)' }}>jj</div>
                            </button>
                            <div className="hidden md:inline-block">
                                <div className="relative inline-block text-[16px] font-bold">
                                    <button className="flex p-2 items-center bg-white border justify-center align-center h-[38px] w-[60px] rounded-[20px] hover:bg-gray-200 focus:outline-none">EN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;