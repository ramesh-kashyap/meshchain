import React from 'react';
import { Link } from 'react-router-dom';

const NodeDetails = () => {
  const nodeData = {
    userId: null,
    comm: null,
    uniqueId: "6697186345",
    activationDate: "12/18/2024",
    totalUptime: "0 hr, 0 min",
    hashRate: "0.25 TH/s",
  };

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
      <div className="bg-blue-100 text-blue-800 p-4 rounded-md mb-6">
        <p>
          Please verify your account to receive free <b>BNB</b> (used for rewards claiming fee). 
          <Link className="font-bold" to="/nodes/fb51ded2-2347-4297-8dc6-9464a167012c#">Verify Now!</Link>
        </p>
      </div>
      <div className="w-full mx-auto mt-10">
        <div className="flex items-center mb-4">
          <Link to="/nodes">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900">← Back</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 h-fit bg-white p-8 rounded-[20px] shadow-md">
            <div className="flex flex-col items-center mb-10">
              <div className="w-[100px] h-[100px] bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold mb-4">
                <img
                  alt="Node Icon"
                  loading="lazy"
                  width="60"
                  height="60"
                  decoding="async"
                  src="upnl/assets/icons/node-icon-telegram.svg"
                  style={{ color: "transparent" }}
                />
              </div>
              <h3 className="text-xl font-bold">{nodeData.userId ? nodeData.userId : "No User ID"}</h3>
              <div className="flex items-center mt-2">
                <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#FFC2BF]">
                  <img
                    alt="Filter Icon"
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    src="upnl/assets/icons/cross-circle.svg"
                    style={{ color: "transparent" }}
                  />
                  Offline
                </span>
              </div>
            </div>
            <div className="flex w-full gap-6 mt-6 justify-center text-[12px] text-[#999]">
              <div className="w-full px-4 py-3 text-center rounded-[12px]" style={{ border: "1px solid rgb(241, 241, 241)" }}>
                <p>Today Rewards</p>
                <p className="text-[32px] text-primary font-semibold" style={{ fontFamily: "ClashDisplay-Semibold" }}>
                  {nodeData.comm ? nodeData.comm : 0}
                </p>
                <p>Point</p>
              </div>
              <div className="w-full px-4 py-3 text-center rounded-[12px]" style={{ border: "1px solid rgb(241, 241, 241)" }}>
                <p>Total Rewards</p>
                <p className="text-[32px] text-primary font-semibold" style={{ fontFamily: "ClashDisplay-Semibold" }}>
                  0
                </p>
                <p>Point</p>
              </div>
            </div>
            <div className="mt-6 text-[14px] font-medium text-[#999] bg-[#F9F9F9] p-5 rounded-xl">
              <div className="flex justify-between mb-3">
                <p>Unique ID</p>
                <span className="text-primary">{nodeData.uniqueId}</span>
              </div>
              <div className="flex justify-between mb-3">
                <p>Activation Date</p>
                <span className="text-primary">{nodeData.activationDate}</span>
              </div>
              <div className="flex justify-between mb-3">
                <p>Total Uptime</p>
                <span className="text-primary">{nodeData.totalUptime}</span>
              </div>
              <div className="flex justify-between mb-3">
                <p>Hash Rate</p>
                <span className="text-primary">{nodeData.hashRate}</span>
              </div>
            </div>
            <div className="text-center">
              <button className="mt-6 px-6 py-0 text-[14px] bg-white text-[#FF3B30] hover:bg-primary-600">Unlink Node</button>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="bg-white h-full p-6 rounded-[20px] shadow-md">
              <div className="flex justify-between mb-4">
                <h4 className="font-semibold text-lg">Uptime</h4>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-full bg-black text-white">Daily</button>
                  <button className="px-3 py-1 rounded-full bg-gray-200">Monthly</button>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex h-full justify-center items-center w-full text-secondary">
                  <div className="max-w-[370px] text-center">
                    <img
                      alt="Icon Empty"
                      loading="lazy"
                      width="64"
                      height="40"
                      decoding="async"
                      className="mx-auto mb-2"
                      src="upnl/assets/images/empty_state.svg"
                      style={{ color: "transparent", width: "unset" }}
                    />
                    <span className="max-w-[100px]">No uptime data yet. Start contributing to see your progress here!</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white h-full p-6 rounded-[20px] shadow-md">
              <div className="flex justify-between mb-4">
                <h4 className="font-semibold text-lg">Total Rewards</h4>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded-full bg-black text-white">Daily</button>
                  <button className="px-3 py-1 rounded-full bg-gray-200">Monthly</button>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div className="flex h-full justify-center items-center w-full text-secondary">
                  <div className="max-w-[370px] text-center">
                    <img
                      alt="Icon Empty"
                      loading="lazy"
                      width="64"
                      height="40"
                      decoding="async"
                      className="mx-auto mb-2"
                      src="upnl/assets/images/empty_state.svg"
                      style={{ color: "transparent", width: "unset" }}
                    />
                    <span className="max-w-[100px]">No rewards data yet. Start contributing to see your progress here!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeDetails;
