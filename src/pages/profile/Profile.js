import React, { useState } from 'react';
const Profile = () => {
const [isPasswordPopupOpen, setPasswordPopupOpen] = useState(false);
const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
const [isTrxPasswordPopupOpen, setTrxPasswordPopupOpen] = useState(false); // For the new popup
const handlePasswordPopupToggle = () => {
setPasswordPopupOpen(!isPasswordPopupOpen);
};
const handleProfilePopupToggle = () => {
setProfilePopupOpen(!isProfilePopupOpen);
};
const handleTrxPasswordPopupToggle = () => {
setTrxPasswordPopupOpen(!isTrxPasswordPopupOpen); // Toggle the new popup
};
return (
<div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">
   <div className="w-full mt-10 flex justify-center text-primary">
      <div className="max-w-[1920px] w-full">
         <div className="w-full relative max-w-[669px] pb-[46px] text-center pt-[36px] bg-[#FFF] rounded-[16px] mx-auto">
            <div className="w-[100px] h-[100px] rounded-full mx-auto text-[72px] font-semibold" style={{ background: '#2da9dd', fontFamily: 'ClashDisplay-Semibold' }}>
            B
         </div>
         <button type="submit"  onClick={handleProfilePopupToggle} className="absolute right-10 top-10" id="profileShow" >
         <img alt="Edit Icon" loading="lazy" width="28" height="28" src="upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }}  />
         </button>
         <div className="mx-auto w-full text-primary text-[28px] font-semibold" style={{ fontFamily: 'ClashDisplay-Semibold' }} >
         Bernila!
      </div>
      <div className="mx-auto w-full text-secondary text-sm mb-[60px]">
         kumar@gmail.com!
      </div>
      <div className="flex flex-wrap md:flex-nowrap mx-auto w-full justify-center">
         <button className="rounded-[30px] h-[48px] py-3 mr-2 px-6 bg-[#F1F1F1] md:mr-2 mb-2" onClick={handlePasswordPopupToggle}>
         Login Password
         </button>
         <button className="rounded-[30px] h-[48px] py-3 px-6 bg-[#F1F1F1] md:mr-2 flex items-center justify-center" onClick={handleTrxPasswordPopupToggle}>
         Change Trx Password
         </button>
      </div>
   </div>
   {/* Change Password Modal */}
   {isPasswordPopupOpen && (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <form method="post" action="user/edit-password">
         <input type="hidden" name="_token" value="KKX0De0b1aF69ZyhV4ctcUqPaDEGxVrpSEIoZILh" />
         <div className="bg-white rounded-[20px] w-[500px] px-8 pt-10 pb-6 relative">
            {/* Close button at the top */}
            <h2 className="text-lg font-semibold text-center">Change Password</h2>
            <div className="grid grid-cols-2 gap-4 mt-8">
               {/* Left Column (Email and New Password) */}
               <div className="text-left">
                  <label className="block text-gray-600 mb-1">Email</label>
                  <input type="text" placeholder="Please enter your email" value="kumar@gmail.com" id="emailId" name="emailId" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
               </div>
               <div className="text-left">
                  <label className="block text-gray-600 mb-1">New Password</label>
                  <input type="password" placeholder="Please enter the new password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
               </div>
               {/* Right Column (Verification Code and Confirm Password) */}
               <div className="text-left">
                  <label className="block text-gray-600 mb-1">Verification Code</label>
                  <div className="relative">
                     <input type="text" name="code" placeholder="Enter verification code" className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20" />
                     <span className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600" onClick={() => alert('Code sent!')}>
                     Get Code
                     </span>
                  </div>
               </div>
               <div className="text-left">
                  <label className="block text-gray-600 mb-1">Confirm Password</label>
                  <input type="password" placeholder="Enter the password again to confirm" name="password_confirmation" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" />
               </div>
            </div>
            <div className="mt-10">
               <button type="submit" className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-green-500 text-white">
               Confirm
               </button>
               <button type="submit"  onClick={handlePasswordPopupToggle} className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300" >
               Cancel
               </button>
            </div>
         </div>
      </form>
   </div>
   )}

     {/* Edit Profile Modal */}
     {isProfilePopupOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white rounded-[20px] w-[400px] px-8 pt-10 pb-6 text-center relative">
                                <h2 className="text-lg font-semibold">Edit Profile</h2>
                                <div className="w-[100px] my-10 h-[100px] mx-auto cursor-pointer">
                                    <div className="w-full h-full rounded-full mx-auto text-[72px] font-semibold bg-green-500" >
                                        B
                                    </div>
                                </div>
                                <div className="mb-4 text-left">
                                    <label className="block text-gray-600 mb-1">Name</label>
                                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" placeholder="Enter Full Name" defaultValue="Rajnesh Kumar" />
                                </div>
                                <div className="mt-10">
                                    <button className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-green-500 text-white">Save</button>
                                    <button className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300" onClick={handleProfilePopupToggle}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
   {/* Transaction Password Modal (New Popup) */}
   {isTrxPasswordPopupOpen && (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-[20px] w-[400px] px-8 pb-6 text-center relative">
         {/* Close button at the top */}
         <h2 className="text-lg font-semibold">Change Trx Password</h2>
         <div className="mb-4 text-left">
            <label className="block text-gray-600 mb-1">Old Password</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" placeholder="Enter Old Password" />
         </div>
         <div className="mb-4 text-left">
            <label className="block text-gray-600 mb-1">New Transaction Password</label>
            <input type="password" className="w-full px-3 py-2 border border-gray-300 rounded-[12px]" placeholder="Enter New Trx Password" />
         </div>
         <div className="mt-10">
            <button className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-green-500 text-white">
            Confirm
            </button>
            <button className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300" onClick={handleTrxPasswordPopupToggle}>
            Cancel
            </button>
         </div>
      </div>
   </div>
   )}
</div>
</div>
{/* Bottom Navigation Bar */}
<div className="fixed bottom-0 w-full bg-white flex md:hidden justify-around shadow-lg">
   <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/dashboard">
   <img alt="overview Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-overview.svg" style={{ color: 'transparent' }} />
   <span className="text-xs mt-1 text-gray-400">Overview</span>
   </a>
   <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/node-power">
   <img alt="my_nodes Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-nodes.svg" style={{ color: 'transparent' }} />
   <span className="text-xs mt-1 text-gray-400">Nodes</span>
   </a>
   <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/team">
   <img alt="referrals Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-referrals.svg" style={{ color: 'transparent' }} />
   <span className="text-xs mt-1 text-gray-400">Referrals</span>
   </a>
   <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/wallet">
   <img alt="wallet Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
   <span className="text-xs mt-1 text-green-500">Wallet</span>
   </a>
   <a className="flex w-1/5 p-[12px] flex-col items-center" href="user/profile-setting">
   <img alt="wallet Icon" loading="lazy" width="20" height="20" src="upnl/assets/icons/icon-wallet.svg" style={{ color: 'transparent' }} />
   <span className="text-xs mt-1 text-green-500">Profile</span>
   </a>
</div>
</div>
);
};
export default Profile;