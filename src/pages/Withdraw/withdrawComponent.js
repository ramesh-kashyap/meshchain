import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import axios from 'axios';

const networkOptions = [
  {
    name: "Binance Smart Chain",
    logo: "upnl/assets/icons/icon_bnb_3.svg",
  },
  {
    name: "USDT",
    logo: "upnl/assets/icons/logo_usdt_2.svg",
  },

];


const WithdrawComponent = () => {
  const [selectedOption, setSelectedOption] = useState(networkOptions[0]);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  
  const handleWithdraw = async () => {
      if (!address || !amount) {
          alert("Please enter a valid address and amount!");
          return;
      }

      try {
        
          const response = await axios.post("http://localhost:3002/api/auth/withdrawal", {
           

              network: selectedOption.name,
              address,
              amount: parseFloat(amount),
          });
          console.log("ss:", response);
          alert(response.data.message);
      } catch (error) {
          console.error("Withdrawal error:", error);
          alert("Failed to process withdrawal!");
      }
  };
const DropdownExample = ({ selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between rounded-2xl border border-[#F1F1F1] bg-white text-sm w-full h-[65px] p-3 sm:p-5"
      >
        <div className="flex gap-3 font-semibold">
          <div className="flex items-center space-x-2 lg:space-x-3 text-sm">
            <img alt={selectedOption.name} loading="lazy" width="25" height="25" src={selectedOption.logo} />
            <span>{selectedOption.name}</span>
          </div>
        </div>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-2xl mt-1 z-10">
          {networkOptions.map((option, index) => (
            <div 
              key={index}
              onClick={() => handleOptionClick(option)}
              className="p-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer"
            >
              <img alt={option.name} loading="lazy" width="25" height="25" src={option.logo} />
              <span>{option.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
      <div>
        <div className="flex justify-between">
          <span className="text-white text-sm rounded-[22px] h-[33px] px-3 bg-black mb-4 mt-10 flex items-center space-x-2 cursor-pointer">
            <img alt="Back Icons" loading="lazy" width="17" height="12" src="upnl/assets/icons/icon-back.svg" />
            <span>Back</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-3 gap-6">
          <div className="lg:col-span-3 xl:col-span-2 bg-white rounded-[16px] p-6">
            <h2 className="text-xl sm:text-2xl font-bold">Withdraw</h2>

            <div className="w-full flex flex-col gap-3 md:gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Network</label>
                <DropdownExample selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address</label>
                <div className="flex gap-3 rounded-2xl  bg-white w-full items-center h-[65px]">
                <input
                className="w-full rounded-2xl border bg-white p-3 sm:p-5 text-sm md:text-base"
                placeholder="Enter The Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Amount</label>
                <div className="flex gap-3 rounded-2xl  bg-white w-full items-center h-[65px]">
                <input
                className="w-full rounded-2xl border  bg-white p-3 sm:p-5 text-sm md:text-base"
                placeholder="Minimum withdrawal 0.01 USDT"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />                 <div className="font-semibold cursor-pointer" style={{ color: '#32CD32', fontWeight: '600', cursor: 'pointer' }}>Max</div>

                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-[#F1F1F1]"></div>
            <div className="flex flex-col gap-2 px-0 sm:px-5">
              <div className="flex justify-between items-center">
                <p className="text-[#63728E] font-normal text-xs">Withdraw Fee</p>
                <div className="text-[#0E1A32] font-normal text-xs">0 BNB</div>
              </div>
              <div className="flex justify-between items-center h-6">
                <p className="text-[#63728E] font-normal text-xs">Received Amount</p>
                <div className="text-[#0E1A32] font-semibold text-base">0 USDT</div>
              </div>
            </div>

            <div className="mt-8 w-full flex justify-end">
              <button onClick={handleWithdraw} className="bg-green-500 text-white px-3 py-1 rounded-[30px]  md:w-auto disabled:opacity-50">Confirm</button>
            </div>
          </div>
          <div className="bg-white rounded-[16px] p-6 lg:col-span-2 xl:col-span-1">
            <h3 className="font-semibold mb-3">History</h3>
            <div className="space-y-4 h-full">
              <div className="flex h-full justify-center items-center w-full text-secondary">
                <div className="w-full text-center">
                  <img alt="Icon Empty" loading="lazy" width="64" height="40" className="mx-auto mb-2" src="upnl/assets/icons/empty_state.svg" />
                  <span>No transactions found</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawComponent;
