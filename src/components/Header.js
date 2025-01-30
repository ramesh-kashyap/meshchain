import React from 'react';

export default function Header() {
  return (
    <>
      <div className="Toastify"></div>
      <div className="w-full h-screen bg-gray-100 flex justify-center">
        <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
          <div className="hidden max-h-screen md:flex flex-col text-black transition-all duration-300 justify-between w-[264px]">
            <div>
              <div className="flex items-center justify-between border-b border-gray-200">
                <a
                  className="flex items-center py-5 pl-[22px] h-[80px]"
                  href="{{route('user.dashboard')}}"
                  style={{ width: "119px" }}
                >
                  <img
                    alt="Logo"
                    loading="lazy"
                    width="163"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    src="upnl/assets/icons/logo.png"
                    style={{ color: "transparent", width: "150px" }}
                  />
                </a>
                <button
                  className="text-black bg-gray-200 w-6 h-8 text-[20px] rounded-l-lg"
                  fdprocessedid="cgvemq"
                >
                  <img
                    alt="close"
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    src="upnl/assets/icons/icon_left.svg"
                    style={{ color: "transparent" }}
                  />
                </button>
              </div>

              <nav className="my-5 px-5 text-sm font-medium text-[#555]">
                <div className="text-gray-400 text-xs mb-2">MENU</div>
                <a
                  className="flex items-center py-2 px-3 mb-2 rounded-md bg-green-500 text-white"
                  href="{{route('user.dashboard')}}"
                >
                  <img
                    alt="overview Icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="upnl/assets/icons/icon-overview_active.svg"
                    style={{ color: "transparent" }}
                  />
                  <span className="ml-4">Overview</span>
                </a>
                <a
                  className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100"
                  href="{{route('user.Market')}}"
                >
                  <img
                    alt="my_nodes Icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="upnl/assets/icons/icon-nodes.svg"
                    style={{ color: "transparent" }}
                  />
                  <span className="ml-4">Nodes</span>
                </a>
                <a
                  className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100"
                  href="/rewards"
                >
                  <img
                    alt="rewards Icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="upnl/assets/icons/icon-rewards.svg"
                    style={{ color: "transparent" }}
                  />
                  <span className="ml-4">Rewards</span>
                </a>
                <a
                  className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100"
                  href="{{route('user.team')}}"
                >
                  <img
                    alt="referrals Icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="upnl/assets/icons/icon-referrals.svg"
                    style={{ color: "transparent" }}
                  />
                  <span className="ml-4">Referrals</span>
                </a>
                <a
                  className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100"
                  href="{{route('user.wallet')}}"
                >
                  <img
                    alt="wallet Icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="upnl/assets/icons/icon-wallet.svg"
                    style={{ color: "transparent" }}
                  />
                  <span className="ml-4">Wallet</span>
                </a>
                <a
                  className="flex items-center py-2 px-3 mb-2 rounded-md hover:bg-gray-100"
                  href="{{route('user.profile-setting')}}"
                >
                  <img
                    alt="profile Icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="upnl/assets/icons/icon-profile.svg"
                    style={{ color: "transparent" }}
                  />
                  <span className="ml-4">Profile</span>
                </a>
              </nav>
            </div>
            <footer className="my-5 px-5 text-sm font-medium text-[#555] hidden md:block">
              <div className="text-gray-400 text-xs mb-2">FOLLOW US</div>
              <a
                className="flex items-center py-2 px-3 mb-4 rounded"
                href="#"
              >
                <img
                  alt="X.com Icon"
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  src="upnl/assets/icons/icon_twitter.svg"
                  style={{ color: "transparent" }}
                />
                <span className="ml-4">X.com</span>
              </a>
              <a
                className="flex items-center py-2 px-3 mb-4 rounded"
                href="#"
              >
                <img
                  alt="Telegram Icon"
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  src="upnl/assets/icons/icon_telegram_2.svg"
                  style={{ color: "transparent" }}
                />
                <span className="ml-4">Telegram</span>
              </a>
              <a
                className="flex items-center py-2 px-3 mb-4 rounded"
                href="#"
              >
                <img
                  alt="Discord Icon"
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  src="upnl/assets/icons/icon_discord.svg"
                  style={{ color: "transparent" }}
                />
                <span className="ml-4">Discord</span>
              </a>
              <div
                style={{
                  borderTop: "1px solid rgb(241, 241, 241)",
                  margin: "20px 0px",
                }}
              ></div>
              <div>
                <a
                  className="flex items-center py-2 px-3 mb-4 rounded"
                  href="{{ route('logout') }}"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('logout-form').submit();
                  }}
                >
                  <img
                    alt="Contact Us Icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    src="upnl/assets/icons/customer-service.svg"
                    style={{ color: "transparent" }}
                  />
                  <span className="ml-4">Log out</span>
                </a>
              </div>

              <form
                id="logout-form"
                action="{{ route('logout') }}"
                method="POST"
                className="d-none"
              >
                @csrf
              </form>
            </footer>
          </div>
          <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
            <div className="flex items-center justify-between py-2 mt-5 px-4 md:px-10 lg:px-10 xl:px-20">
              <a className="md:hidden" href="/">
                <img
                  alt="Logo"
                  loading="lazy"
                  width="163"
                  height="40"
                  decoding="async"
                  data-nimg="1"
                  className="max-w-[156px]"
                  src="upnl/assets/icons/logo.png"
                  style={{ color: "transparent", width: "50px" }}
                />
              </a>
              <div className="w-full flex flex-row justify-end md:justify-between">
                <div className="flex items-center h-[38px] text-gray-800 font-medium">
                  <a
                    className="hidden md:flex h-[38px] bg-white p-1 rounded-full mr-3"
                    href="{{route('user.team')}}"
                  >
                    <div className="flex items-center rounded-full pl-3 text-sm">
                      <img
                        alt="User  Avatar"
                        loading="lazy"
                        width="16"
                        height="16"
                        decoding="async"
                        data-nimg="1"
                        className="mr-3"
                        src="upnl/assets/icons/icon_user_add.svg"
                        style={{ color: "transparent" }}
                      />
                      <span> username </span>
                    </div>
                    <div className="flex mx-2 items-center justify-center font-bold"></div>
                  </a>
                </div>
                <div className="relative flex items-center space-x-2 font-semibold">
                  <span className="hidden lg:inline text-xl">Hello, raj!</span>
                  <button fdprocessedid="vcru83">
                    <div
                      className="flex items-center justify-center w-[40px] h-[38px] rounded-full mx-auto text-[24px] font-semibold"
                      style={{
                        backgroundColor: "#0093E9",
                        backgroundImage: "linear-gradient(315deg, #0093E9 0%, #80D0C7 100%)",
                      }}
                    >
                      11223334
                    </div>
                  </button>
                  <div className="hidden md:inline-block">
                    <div className="relative inline-block text-[16px] font-bold">
                      <button
                        className="flex p-2 items-center bg-white border justify-center align-center h-[38px] w-[60px] rounded-[20px] hover:bg-gray-200 focus:outline-none"
                        fdprocessedid="j8dxs1"
                      >
                        EN
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}