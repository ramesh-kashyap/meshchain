import React from 'react';

const Wallet= () => {
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
                                    <input type="hidden" name="_token" value="Mp8WGPpkCtxtvkezkpwvKGFaP8ckS5wUjCIsgRln" />
                                </form>
                            </div>
                        </footer>
                    </div>
                    <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                        <div className="flex items-center justify-between py-2 mt-5 px-4 md:px-10 lg:px-10 xl:px-20">
                            <a className="md:hidden" href="/">
                                <img alt="Logo" loading="lazy" width="163" height="40" decoding="async" className="max-w-[156px]" src="upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '50px' }} />
                            </a>
                            <div className="w-full flex flex-row justify-end md:justify-between">
                                <div className="flex items-center h-[38px] text-gray-800 font-medium">
                                    <a className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3" href="user/team">
                                        <div className="flex items-center rounded-full pl-3 text-sm">
                                            <img alt="User  Avatar" loading="lazy" width="16" height="16" decoding="async" className="mr-3" src="upnl/assets/icons/icon_user_add.svg" style={{ color: 'transparent' }} />
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
                            <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                                <div className="lg:col-span-3 xl:col-span-2 flex flex-col">
                                    <div className="bg-white rounded-[16px] p-6 lg:p-8">
                                        <h2 className="text-[24px] font-semibold text-primary mb-8">My Balance</h2>
                                        <div className="flex flex-col">
                                            <div>
                                                <p className="text-primary font-medium mb-2">Total Assets</p>
                                                <p className="text-[30px] font-bold"><span>1,600.00 USDT</span></p>
                                                <p className="text-secondary" style={{ paddingBottom: '10px' }}></p>
                                            </div>
                                            <div className="flex flex-row gap-2 items-end">
                                                <a className="bg-black text-white h-[46px] px-6 py-2 rounded-[30px] flex flex-1 items-center justify-center" href="user/rechargeFunds" style={{ color: 'black' }}>Deposit</a>
                                                <a href="user/select-network">
                                                    <button className="border border-black h-[46px] text-black px-6 py-2 rounded-[30px] flex flex-1 items-center justify-center">Withdraw</button>
                                                </a>
                                                <a href="user/transfer_fund">
                                                    <button className="border border-black h-[46px] text-black px-6 py-2 rounded-[30px] flex flex-1 items-center justify-center" onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#000000'; e.currentTarget.style.color = 'white'; }} onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'black'; }}>Transfer</button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-[16px] mt-6 p-6 lg:p-8 flex-1">
                                        <h3 className="font-semibold mb-3">Assets</h3>
                                        <table className="w-full">
                                            <thead>
                                                <tr className="text-secondary">
                                                    <th className="text-left py-1 font-medium text-[12px]">Asset</th>
                                                    <th className="text-right py-1 font-medium text-[12px]">Holdings</th>
                                                    <th className="text-right py-1 font-medium text-[12px] hidden md:table-cell">Price</th>
                                                    <th className="text-right py-1 font-medium text-[12px]"><span className="hidden md:inline-block">Total USD</span><span className="md:hidden">USD</span></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Repeat this block for each asset */}
                                                <tr className="border-t h-[72px]">
                                                    <td className="py-4 flex items-center space-x-2 lg:space-x-3 text-sm">
                                                        <img alt="POINT logo" loading="lazy" width="40" height="40" decoding="async" src="upnl/assets/icons/logo_point_2.svg" style={{ color: 'transparent' }} />
                                                        <span>POINT</span>
                                                    </td>
                                                    <td className="py-4 text-right text-sm"><span>0</span></td>
                                                    <td className="py-4 text-primary text-right text-sm hidden md:table-cell"><span className="text-secondary">Coming Soon</span></td>
                                                    <td className="py-4 text-primary text-right text-sm"><span className="text-secondary">Coming Soon</span></td>
                                                </tr>
                                                {/* Add more assets here */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
                                    <h3 className="font-semibold mb-3">History</h3>
                                    <div className="space-y-4 h-full">
                                        {/* Repeat this block for each transaction */}
                                        <div className="flex justify-between items-center text-sm mb-4">
                                            <div className="flex">
                                                <div className="flex items-center justify-center rounded-[50%] bg-[#F9F9F9] w-[44px] h-[44px]">
                                                    <img alt="IN Icon" loading="lazy" width="28" height="28" decoding="async" src="upnl/assets/icons/icon_down.svg" style={{ color: 'transparent' }} />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="font-medium">Deposit <a target="_blank" href="user/viewdetail/6762b7d5f05e8bbe38097901" style={{ marginLeft: '10px', color: '#ffffff', textTransform: 'lowercase' }}><i className="fa fa-share-alt" aria-hidden="true"></i></a></p>
                                                    <p className="text-secondary font-light text-sm">Wed, 18 Dec 2024 17:23:57</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-green-500"><span> +400</span></p>
                                            </div>
                                        </div>
                                        {/* Add more transaction history here */}
                                    </div>
                                  
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
                        <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" className="green-filter" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-green-500">Wallet</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
                        <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" className="green-filter" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-green-500">Profile</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Wallet;