import { useState, useEffect } from "react";
import axios from "axios";


const Profile = () => {
const [isPasswordPopupOpen, setPasswordPopupOpen] = useState(false);
const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);
const [isTrxPasswordPopupOpen, setTrxPasswordPopupOpen] = useState(false); // For the new popup
const [email, setEmail] = useState("sagartyagi1024@gmail.com");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
 
const handlePasswordPopupToggle = () => {
setPasswordPopupOpen(!isPasswordPopupOpen);
setMessage("");

};
const handleProfilePopupToggle = () => {
setProfilePopupOpen(!isProfilePopupOpen);
};
const handleTrxPasswordPopupToggle = () => {
setTrxPasswordPopupOpen(!isTrxPasswordPopupOpen); // Toggle the new popup
};


const [name, setName] = useState("");
const token = localStorage.getItem("token");  // Ya jo bhi method use ho
useEffect(() => {
   if (!token) return;

   axios.get("http://localhost:3002/api/auth/profiles", {
       headers: { Authorization: `Bearer ${token}` }
   })
   .then(response => {
       console.log("Profile Data:", response.data);  // Debugging
       setName(response.data.name);
   })
   .catch(error => {
       console.error("Error fetching profile:", error.response?.data);
   });
}, [token]);


const handleSave = () => {
    axios.put("http://localhost:3002/api/auth/profile", { name }, {
        headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => {
        alert("Profile updated successfully");
        setName(response.data.name); 
        handleProfilePopupToggle(); 
    })
    .catch(error => {
        console.error("Error updating profile:", error.response?.data);
    });
};

 // Send Code API Call
 const sendVerificationCode = async () => {
   

   try {
     
     const response = await axios.post("http://localhost:3002/api/auth/send-code", { email });
     setMessage(response.data.message || "Verification code sent!");
     console.log("response",response);
     
   } catch (error) {
     setMessage("Failed to send code. Please try again.");
     console.log("response","error");
   }
 };

 // Reset Password API Call
 const resetPassword = async (e) => {
   e.preventDefault();
   if (newPassword !== confirmPassword) {
     setMessage("Passwords do not match!");
     return;
   }

   try {
     const response = await axios.post("http://localhost:3002/api/auth/reset-password", {
       email,
       password: newPassword,
       code: verificationCode,
     });

     setMessage(response.data.message || "Password reset successful!");
     setPasswordPopupOpen(false);
   } catch (error) {
     setMessage("Failed to reset password. Please check the code and try again.");
   }
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
      <form>
         <input type="hidden" name="_token" value="KKX0De0b1aF69ZyhV4ctcUqPaDEGxVrpSEIoZILh" />
         <div className="bg-white rounded-[20px] w-[500px] px-8 pt-10 pb-6 relative">
            {/* Close button at the top */}
            <h2 className="text-lg font-semibold text-center">Change Password</h2>
            <div className="grid grid-cols-2 gap-4 mt-8">
            {message && <p className="text-center text-red-500">{message}</p>}
            <div className="text-left">
                  <label className="block text-gray-600 mb-1">Email</label>
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                      disabled
                    />               </div>
               <div className="text-left">
                  <label className="block text-gray-600 mb-1">New Password</label>
                  <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                    />               </div>
               {/* Right Column (Verification Code and Confirm Password) */}
               <div className="text-left">
                  <label className="block text-gray-600 mb-1">Verification Code</label>
                  <div className="relative">
                  <input
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        placeholder="Enter verification code"
                        className="w-full px-3 py-2 border border-gray-300 rounded-[12px] pr-20"
                      />                     <span
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
                        onClick={sendVerificationCode}
                      >                     Get Code
                     </span>
                  </div>
               </div>
               <div className="text-left">
                  <label className="block text-gray-600 mb-1">Confirm Password</label>
                  <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
                    />               </div>
            </div>
            <div className="mt-10">
            <button
                    onClick={resetPassword}
                    className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-green-500 text-white"
                  >
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
                                <div className="w-full h-full rounded-full mx-auto text-[72px] font-semibold bg-green-500">
                                    {name.charAt(0).toUpperCase()} {/* First letter of name */}
                                </div>
                            </div>
                            <div className="mb-4 text-left">
                                <label className="block text-gray-600 mb-1">Name</label>
                                <input
    type="text"
    value={name}  // ✅ Ensure value is set from state
    onChange={(e) => setName(e.target.value)}
    className="w-full px-3 py-2 border border-gray-300 rounded-[12px]"
/>

                            </div>
                            <div className="mt-10">
                                <button onClick={handleSave} className="w-full h-[46px] mb-2 px-4 py-2 rounded-[30px] bg-green-500 text-white">
                                    Save
                                </button>
                                <button onClick={handleProfilePopupToggle} className="w-full h-[46px] px-4 py-2 rounded-[30px] bg-gray-300">
                                    Cancel
                                </button>
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

</div>
);
};
export default Profile;