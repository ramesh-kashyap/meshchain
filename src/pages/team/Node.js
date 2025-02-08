// // import React from 'react';


// const Node = () => {
//     // const [incomes, setIncomes] = useState([]);
//     // const [loading, setLoading] = useState(true);
  
//     // useEffect(() => {
//     //     const token = localStorage.getItem("token");
//     //     if (token) {
//     //         fetch("http://localhost:5001/api/auth/income/roi", {
//     //           method: "GET",
//     //           headers: {
//     //             "Authorization": `Bearer ${token}`,
//     //             "Content-Type": "application/json",
//     //           },
//     //         })
//     //         .then((res) => res.json())
//     //         .then((data) => console.log("API Response:", data))
//     //         .catch((err) => console.error("Fetch error:", err));
//     //     }
//     // }, [localStorage.getItem("token")]);

      
//     return (
//         <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
//             <div className="w-full mt-10 flex justify-center text-primary">
//                 <div className="w-full max-w-[1440px] rounded-lg">
//                     <div className="flex justify-between mb-4 items-center">
//                         <a href="user/subscribe">
//                         {error && <p style={{ color: "red" }}>{error}</p>}

//                             <button className="px-3 flex items-center h-[34px] bg-[#171717] rounded-[22px] text-[14px] text-white">
//                                 <img
//                                     alt="Add Node Icon"
//                                     loading="lazy"
//                                     width="16"
//                                     height="16"
//                                     className="mr-1"
//                                     src="upnl/assets/icons/add_node.svg"
//                                 />
//                                 raj
//                             </button>
//                         </a>
//                         <div className="relative">
//                             <button className="px-3 h-[34px] bg-white rounded-full shadow">
//                                 <img
//                                     alt="Filter Icon"
//                                     loading="lazy"
//                                     width="16"
//                                     height="16"
//                                     src="upnl/assets/icons/bars-filter.svg"
//                                 />
//                             </button>
//                         </div>
//                     </div>




//                     <div className="bg-white mb-3 p-4 rounded-[16px] font-semibold text-gray-600 text-center">
//                         <div className="hidden md:grid grid-cols-5 lg:grid-cols-6">
//                             <div className="text-left">User ID</div>
//                             <div className="hidden lg:inline-block">Amount</div>
//                             <div>Commission</div>
//                             <div>Remark</div>
//                             <div> Time</div>
//                             <div className="text-right">Level</div>
//                         </div>
//                     </div>
//                     <div className="space-y-4">
//                         <a href="/nodedetails">
//                             <div className="bg-white p-3 rounded-[16px] shadow transition-transform hover:shadow-md cursor-pointer">




                                
//                                 <div className="hidden md:grid grid-cols-5 lg:grid-cols-6 items-center">
//                                     <div className="flex items-center space-x-3">
//                                         <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
//                                             <img
//                                                 alt="Node Icon"
//                                                 loading="lazy"
//                                                 width="16"
//                                                 height="16"
//                                                 src="upnl/assets/icons/icon-referrals.svg"
//                                             />
//                                         </div>



//                                         <div>
//                                             <p className="text-sm font-medium">raj</p>
//                                             <p className="text-xs text-[#999999]">Telegram Node</p>
//                                         </div>
//                                     </div>
//                                     <p className="hidden lg:block text-sm text-center font-medium">1236796590</p>
//                                     <div className="flex justify-center">
//                                         <span className="flex px-[6px] py-1 rounded-full text-xs bg-[#C4FFC8]">Online</span>
//                                     </div>
//                                     <div className="flex justify-center">
//                                         <p className="text-sm w-fit text-center px-3">0.25 TH/s</p>
//                                     </div>
//                                     <div className="flex justify-center">
//                                         <p className="text-sm w-fit text-center px-3 bg-[#F1F1F1] rounded-full">0 hr, 0 min</p>
//                                     </div>
//                                     <div className="text-right">
//                                         <p className="text-lg font-semibold"><span>0pt</span></p>
//                                         <p className="text-xs">Total: <span>0pt</span></p>
//                                     </div>
//                                 </div>







                            
//                             </div>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Node;
