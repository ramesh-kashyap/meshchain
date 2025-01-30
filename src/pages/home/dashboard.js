import React from 'react';
import Header from '../../components/Header';


const Dashboard = () => {
    return (
        
        <div id="__next">
           
           <Header />

            <div className="Toastify"></div>
            <div className="w-full h-screen bg-gray-100 flex justify-center">
                <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
                    <div className="hidden max-h-screen md:flex flex-col text-black transition-all duration-300 justify-between w-[264px]">
                        <div>
        <div class="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
        <div class="w-full mt-10 flex flex-col justify-center text-primary">
            <div></div>
            <div class="max-w-[1920px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-[16px] flex flex-col items-left">
                    <div class="flex items-center justify-left mb-4">
                        <div class="bg-blue-100 rounded-full p-2"><img alt="Total Rewards Icon" loading="lazy" width="32"
                                height="32" decoding="async" data-nimg="1"
                                src="upnl/assets/icons/icon_total_rewards.svg" style={{color: 'transparent'}}/>
                        </div>
                    </div>
                    <div class="text-left">
                        <h3 class="font-medium mb-1">My Balance</h3>
                        <div class="flex flex-row md:flex-col xl:flex-row items-baseline">
                            <p class="text-[40px] md:text-[36px] lg:text-[40px] mr-2 font-semibold"
                                 style={{
                                    fontFamily: 'ClashDisplay-Semibold'
                                  }}><span style={{
                                    fontSize: '25px'
                                  }}> 1000 USDT</span></p>
                            <p class="text-secondary"></p>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-6 rounded-[16px] max-h-[226px] h-full flex flex-col items-left">
                    <div class="flex items-center justify-left mb-4">
                        <div class="bg-green-100 rounded-full p-2"><img alt="Today's Rewards Icon" loading="lazy" width="32"
                                height="32" decoding="async" data-nimg="1"
                                src="upnl/assets/icons/icon_todays_rewards.svg" style={{color: 'transparent'}}/>
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
                        </div>
                    </div>
                </div>
                <div class="flex space-x-4 mt-6">
                    <div class="flex items-center"><span
                            class="w-[22px] h-[22px] bg-green-500 rounded-full mr-2"></span><span
                            class="text-gray-600">Mining</span></div>
                    <div class="flex items-center"><span
                            class="w-[22px] h-[22px] bg-blue-500 rounded-full mr-2"></span><span
                            class="text-gray-600">Referrals</span></div>
                    <div class="flex items-center"><span
                            class="w-[22px] h-[22px] bg-[#FFCC00] rounded-full mr-2"></span><span
                            class="text-gray-600">Tasks</span></div>
                </div>
            </div>
    
    
    
            <div class="col-span-1 lg:col-span-4 bg-white rounded-[16px] mt-6 p-5" >
                <h2 class="text-[20px] font-medium text-primary text-center mb-3">Become Resource
                    Provider</h2>
                <div class="space-y-4"><a target="_blank"
                        class="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden"
                        href="https://t.me/vgcube_bot/vgcubeapp">
                        <div class="absolute top-[-50px] inset-0 flex items-center justify-center">
                            <div class="w-[140%] h-[150%] rounded-full opacity-30"
                                style={{
                                    backgroundColor: "#0093E9",
                                    backgroundImage: "linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)"
                                  }}>
                            </div>
                        </div>
                        <div class="w-full"><span class="text-[16px] ml-4">Set Up Telegram Node</span>
                        </div><img alt="Set Up Telegram Node" loading="lazy" width="98" height="98" decoding="async"
                            data-nimg="1" src="upnl/assets/images/telegram-svgrepo-com.svg"
                            style={{
                                color: 'transparent',
                                position: 'absolute',
                                bottom: '0px',
                                right: '10px',
                                marginBottom: '-5px',
                                opacity: '0.2'
                              }}/>
                    </a><a target="_blank"
                        class="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden"
                        href="https://t.me/vgcube_bot/vgcubeapp">
                        <div class="absolute top-[-50px] inset-0 flex items-center justify-center">
                            <div class="w-[140%] h-[150%] rounded-full opacity-30"
                               style={{
                                backgroundColor: '#0093E9',
                                backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)'
                              }}>
                            </div>
                        </div>
                        <div class="w-full"><span class="text-[16px] ml-4">Install Browser
                                Extension</span></div><img alt="Install Browser Extension" loading="lazy" width="98"
                            height="98" decoding="async" data-nimg="1"
                            src="upnl/assets/images/server-square-svgrepo-com.svg"
                            style={{
                                color: 'transparent',
                                position: 'absolute',
                                bottom: '0px',
                                right: '10px',
                                marginBottom: '-5px',
                                opacity: '0.2'
                              }}/>
                    </a><a target="_blank"
                        class="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden"
                        href="https://docs.meshchain.ai/getting-started/resource-provider-guide/install-software-node">
                        <div class="absolute top-[-50px] inset-0 flex items-center justify-center">
                            <div class="w-[140%] h-[150%] rounded-full opacity-30"
                                style={{
                                    backgroundColor: '#0093E9',
                                    backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)'
                                  }}>
                            </div>
                        </div>
                        <div class="w-full"><span class="text-[16px] ml-4">Install Desktop Node</span>
                        </div><img alt="Install Desktop Node" loading="lazy" width="98" height="98" decoding="async"
                            data-nimg="1" src="upnl/assets/images/extension-puzzle-sharp-svgrepo-com.svg"
                            style={{
                                color: 'transparent',
                                position: 'absolute',
                                bottom: '0px',
                                right: '10px',
                                marginBottom: '-5px',
                                opacity: '0.2'
                              }}/>
                    </a><a target="_blank"
                        class="relative min-h-[70px] h-full text-left w-full py-4 text-white font-semibold bg-[#003724] rounded-[16px] flex items-center justify-center space-x-2 overflow-hidden"
                        href="https://docs.meshchain.ai/getting-started/resource-provider-guide/install-dedicated-node">
                        <div class="absolute top-[-50px] inset-0 flex items-center justify-center">
                            <div class="w-[140%] h-[150%] rounded-full opacity-30"
                                style={{
                                    backgroundColor: '#0093E9',
                                    backgroundImage: 'linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)'
                                  }}>
                            </div>
                        </div>
                        <div class="w-full"><span class="text-[16px] ml-4">Purchase Hardware Node</span>
                        </div><img alt="Purchase Hardware Node" loading="lazy" width="98" height="98" decoding="async"
                            data-nimg="1" src="upnl/assets/images/archive-down-minimlistic-svgrepo-com.svg"
                            style={{
                                color: 'transparent',
                                position: 'absolute',
                                bottom: '0px',
                                right: '10px',
                                marginBottom: '-5px',
                                opacity: '0.2'
                              }}/>
                    </a></div>
    
            </div>
        </div>
    </div>
    </div>
    </div>
    <div class="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg"><a
            class="flex w-1/5 p-[12px] flex-col items-center" href="{{route('user.dashboard')}}"><img alt="overview Icon"
                loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class=""
                src="upnl/assets/icons/icon-overview.svg"   style={{
                    color: 'transparent'
                  }}/><span
                class="text-xs mt-1 text-gray-400">Overview</span></a><a class="flex w-1/5 p-[12px] flex-col items-center"
            href="{{route('user.Market')}}"><img alt="my_nodes Icon" loading="lazy" width="20" height="20" decoding="async"
                data-nimg="1" class="" src="upnl/assets/icons/icon-nodes.svg"
                style={{color: 'transparent'}}/><span class="text-xs mt-1 text-gray-400">Nodes</span></a>
    <a
            class="flex w-1/5 p-[12px] flex-col items-center" href="/rewards"><img alt="rewards Icon" loading="lazy"
                width="20" height="20" decoding="async" data-nimg="1" class=""
                src="upnl/assets/icons/icon-rewards.svg" style={{color: 'transparent'}}/><span
                class="text-xs mt-1 text-gray-400">Rewards</span></a> 
    
    
        <a class="flex w-1/5 p-[12px] flex-col items-center" href="{{route('user.team')}}"><img alt="referrals Icon"
                loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class=""
                src="upnl/assets/icons/icon-referrals.svg" style={{color: 'transparent'}}/><span
                class="text-xs mt-1 text-gray-400">Referrals</span></a>
    
        <a class="flex w-1/5 p-[12px] flex-col items-center" href="{{route('user.wallet')}}"><img alt="wallet Icon"
                loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="green-filter"
                src="upnl/assets/icons/icon-wallet.svg" style={{color: 'transparent'}}/><span
                class="text-xs mt-1 text-green-500">Wallet</span>
    
        </a>
    
    
    
        <a class="flex w-1/5 p-[12px] flex-col items-center" href="{{route('user.profile-setting')}}"><img alt="wallet Icon"
                loading="lazy" width="20" height="20" decoding="async" data-nimg="1" class="green-filter"
                src="upnl/assets/icons/icon-wallet.svg" style={{color: 'transparent'}}/><span
                class="text-xs mt-1 text-green-500">Profile</span>
    
        </a></div>
    </div>
    
    </div>
    </div>
    );
};

export default Dashboard;