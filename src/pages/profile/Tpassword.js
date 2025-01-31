import React from 'react';

const Tpassword = () => {
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
                            <a className="md:hidden" href="/"><img alt="Logo" loading="lazy" width="163" height="40" decoding="async" className="max-w-[156px]" src="upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '50px' }} /></a>
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
                                    <div className="bg-white rounded-[16px] mt-6 p-6 lg:p-8 flex-1">
                                        <center>
                                            <h3 className="font-semibold mb-3">Change Transaction Password</h3>
                                        </center>
                                        <form method="post" action="user/change-trxpasswword">
                                            <input type="hidden" name="_token" value="Mp8WGPpkCtxtvkezkpwvKGFaP8ckS5wUjCIsgRln" />
                                            <div className="mb-4">
                                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                                <input type="email" name="email" readOnly style={{ width: '100%' }} value="kumar@gmail.com" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="code" className="block text-gray-700 font-medium mb-2">Verification Code</label>
                                                <div className="input-container" style={{ position: 'relative', width: '100%' }}>
                                                    <input type="text" name="code" placeholder="Enter verification code" className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20" />
                                                    <span className="code-btn" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', color: 'gray' }}>
                                                        Get Code
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Transaction password</label>
                                                <input type="password" id="passwordInput" placeholder="Please enter the new password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                            </div>
                                            <div className="mb-4">
                                                <label htmlFor="password_confirmation" className="block text-gray-700 font-medium mb-2">Confirm password</label>
                                                <input type="password" id="passwordInput2" placeholder="Enter the password again to confirm" name="password_confirmation" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
                                            </div>
                                            <div className="text-right">
                                                <button type="submit" style={{ backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)' }} className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300">
                                                    Confirm
                                                </button>
                                                <br />
                                                <br />
                                                <a href="user/profile-setting" className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300 inline-block text-center">
                                                    Cancel
                                                </a>
                                            </div>
                                        </form>
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
                        <img alt="wallet Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-green-500">Wallet</span>
                    </a>
                    <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
                        <img alt="profile Icon" loading="lazy" width="20" height="20" decoding="async" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                        <span className="text-xs mt-1 text-green-500">Profile</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Tpassword;