import React, { useEffect, useState } from 'react';

const Withdraw= () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [amount, setAmount] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            const enddate = new Date();
            const start = new Date('2025-01-30 12:14:03');
            const difference = start.getTime() - enddate.getTime();

            if (difference <= 0) {
                clearInterval(timer);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            } else {
                const seconds = Math.floor(difference / 1000);
                const minutes = Math.floor(seconds / 60);
                const hours = Math.floor(minutes / 60);
                const days = Math.floor(hours / 24);
                setHours(hours % 24);
                setMinutes(minutes % 60);
                setSeconds(seconds % 60);
                setDays(days);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const validateAmount = (value) => {
        setAmount(value);
        if (parseFloat(value) < 50) {
            setAlertMessage('Minimum amount is 50 USDT.');
        } else {
            setAlertMessage('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div id="__next">
            <div className="Toastify"></div>
            <div className="w-full h-screen bg-gray-100 flex justify-center">
                <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
                    <div className="hidden max-h-screen md:flex flex-col text-black transition-all duration-300 justify-between w-[264px]">
                        <div>
                            <div className="flex items-center justify-between border-b border-gray-200">
                                <a className="flex items-center py-5 pl-[22px] h-[80px]" href="/user/dashboard" style={{ width: '119px' }}>
                                    <img alt="Logo" loading="lazy" width="163" height="40" src="upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '150px' }} />
                                </a>
                            </div>
                            <nav className="my-5 px-5 text-sm font-medium text-[#555]">
                                <div className="text-gray-400 text-xs mb-2">MENU</div>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md bg-green-500 text-white" href="/user/dashboard">
                                    <img alt="overview Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon-overview_active.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Overview</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/user/node-power">
                                    <img alt="my_nodes Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Nodes</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/user/team">
                                    <img alt="referrals Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Referrals</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/user/wallet">
                                    <img alt="wallet Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Wallet</span>
                                </a>
                                <a className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100" href="/user/profile-setting">
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
                                <a className="flex items-center py-2 px-3 mb-4 rounded" href="/logout" onClick={(e) => { e.preventDefault(); /* Handle logout */ }}>
                                    <img alt="Contact Us Icon" loading="lazy" width="16" height="16" src="upnl/assets/icons/customer-service.svg" style={{ color: 'transparent' }} />
                                    <span className="ml-4">Log out</span>
                                </a>
                            </div>
                        </footer>
                    </div>
                    <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                        <div className="flex items-center justify-between py-2 mt-5 px-4 md:px-10 lg:px-10 xl:px-20">
                            <a className="md:hidden" href="/"><img alt="Logo" loading="lazy" width="163" height="40" src="upnl/assets/icons/logo.png" style={{ color: 'transparent', width: '50px' }} /></a>
                            <div className="w-full flex flex-row justify-end md:justify-between">
                                <div className="flex items-center h-[38px] text-gray-800 font-medium">
                                    <a className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3" href="/user/team">
                                        <div className="flex items-center rounded-full pl-3 text-sm">
                                            <img alt="User  Avatar" loading="lazy" width="16" height="16" src="upnl/assets/icons/icon_user_add.svg" style={{ color: 'transparent' }} />
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
                            <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
                                <p>Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee). <a className="font-bold" href="/wallet/withdraw#">Verify Now!</a></p>
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <span className="text-white text-sm rounded-[22px] h-[33px] px-3 bg-black mb-4 mt-10 flex items-center space-x-2 cursor-pointer">
                                        <img alt="Back Icons" loading="lazy" width="17" height="12" src="upnl/assets/icons/icon-back.svg" style={{ color: 'transparent' }} />
                                        <span>Back</span>
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
                                    <div className="lg:col-span-3 xl:col-span-2 bg-white rounded-[16px] p-6">
                                        <h2 className="text-xl sm:text-2xl font-bold">Withdraw</h2>
                                        <br /><br />
                                        <div className="flex justify-between items-center w-full bg-[#F9F9F9] rounded-[27px] px-[40px] max-sm:px-[20px] py-[4px] max-sm:py-[10px] text-[14px] text-[#999999] my-4 sm:my-6 sm:py-6 max-sm:gap-0">
                                            <span className="text-center text-[#171717] cursor-pointer">Select token</span>
                                            <img alt="right-arrow" loading="lazy" width="30" height="30" src="upnl/assets/icons/right-arrow.svg" style={{ color: 'transparent' }} />
                                            <span className="text-center text-[#171717] cursor-pointer">Withdraw details</span>
                                        </div>
                                        <br />
                                        <form onSubmit={handleSubmit}>
                                            <div className="w-full flex flex-col gap-3 md:gap-5">
                                                <div className="relative py-[20px] md:py-[30px]">
                                                    <div className="w-full h-[2px] bg-[#DFDFDF]"></div>
                                                    <div className="absolute flex items-center gap-1 translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-white px-2" style={{ marginLeft: '313px' }}>
                                                        <img alt="USDT logo" loading="lazy" width="30" height="30" src="upnl/assets/icons/logo_usdt_2.svg" style={{ color: 'transparent' }} />
                                                        <span className="text-[20px] font-bold">USDT</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <br /><br />
                                                    <div className="flex flex-col gap-4">
                                                        <div className="w-full flex flex-col gap-2">
                                                            <label className="text-sm font-medium">Network</label>
                                                            <div className="flex gap-3 rounded-2xl border border-[#F1F1F1] bg-white ring-offset-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 w-full items-center h-[65px] p-3 sm:p-5">
                                                                <select className="w-full" name="paymentMode">
                                                                    <option value="USDT.TRC20">USDT (TRC20)</option>
                                                                    <option value="USDT.BEP20">USDT (BEP20)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="w-full flex flex-col gap-2">
                                                            <label className="text-sm font-medium">Transaction Password</label>
                                                            <div className="flex gap-3 rounded-2xl border border-[#F1F1F1] bg-white ring-offset-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 w-full items-center h-[65px] p-3 sm:p-5">
                                                                <input
                                                                    name="transaction_password"
                                                                    className="w-full placeholder:text-muted-foreground placeholder:text-[#999999] text-sm md:text-base focus-visible:outline-none placeholder:font-normal disabled:cursor-not-allowed"
                                                                    placeholder="Transaction Password"
                                                                    style={{ outline: 'none' }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="w-full">
                                                            <div className="w-full flex flex-col gap-2">
                                                                <label className="text-sm font-medium">Amount</label>
                                                                <div className="flex gap-3 rounded-2xl border border-[#F1F1F1] bg-white ring-offset-white focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 w-full items-center h-[65px] p-3 sm:p-5">
                                                                    <div>
                                                                        <input
                                                                            id="amountInput"
                                                                            className="w-full placeholder:text-muted-foreground placeholder:text-[#999999] text-sm md:text-base placeholder:font-normal disabled:cursor-not-allowed"
                                                                            placeholder="Enter amount"
                                                                            type="text"
                                                                            inputMode="numeric"
                                                                            name="amount"
                                                                            style={{ outline: 'none' }}
                                                                            value={amount}
                                                                            onChange={(e) => validateAmount(e.target.value)}
                                                                        />
                                                                        {alertMessage && <p style={{ color: 'red', fontSize: '14px' }}>{alertMessage}</p>}
                                                                    </div>
                                                                    <div className="text-[#00C076] font-semibold cursor-pointer"></div>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-end items-center pt-2">
                                                                <div className="flex items-center gap-1 text-xs text-[#63728E] font-normal">
                                                                    <p>Available</p>
                                                                    <div className="flex items-center text-[#0E1A32] h-4"><span>0 USDT</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full h-[1px] bg-[#F1F1F1]"></div>
                                                    <div className="flex flex-col gap-2 px-0 sm:px-5">
                                                        <div className="flex justify-between items-center">
                                                            <p className="text-[#63728E] font-normal text-xs">Withdraw Fee</p>
                                                            <div className="flex text-[#0E1A32] font-normal text-xs"><span>5%</span></div>
                                                        </div>
                                                        <div className="flex justify-between items-center h-6">
                                                            <p className="text-[#63728E] font-normal text-xs">Received Amount</p>
                                                            <div className="text-[#0E1A32] font-semibold text-base"><span>0 USDT</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-8 w-full flex justify-end">
                                                <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg submit-btn">
                                                    Confirm
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
                                        <h3 className="font-semibold mb-3">History</h3>
                                        <div className="space-y-4 h-full">
                                            <div className="flex h-full justify-center items-center w-full text-secondary">
                                                <div className="w-full text-center">
                                                    <img alt="Icon Empty" loading="lazy" width="64" height="40" src="upnl/assets/images/empty_state.svg" style={{ color: 'transparent' }} />
                                                    <span>No transactions found</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
                        <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/"><img alt="overview Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} /><span className="text-xs mt-1 text-gray-400">Overview</span></a>
                        <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/nodes"><img alt="my_nodes Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} /><span className="text-xs mt-1 text-gray-400">Nodes</span></a>
                        <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/rewards"><img alt="rewards Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-rewards.svg" style={{ color: 'transparent' }} /><span className="text-xs mt-1 text-gray-400">Rewards</span></a>
                        <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/referrals"><img alt="referrals Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} /><span className="text-xs mt-1 text-gray-400">Referrals</span></a>
                        <a className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center" href="/wallet"><img alt="wallet Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} /><span className="text-xs mt-1 text-gray-400">Wallet</span></a>
                        <button className="flex w-1/5 p-2 sm:p-[12px] flex-col items-center">
                            <img alt="More Options" loading="lazy" width="20" height="20" src="upnl/assets/icons/more.png" style={{ color: 'transparent' }} />
                            <span className="text-xs mt-1 text-gray-400">More</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Withdraw;