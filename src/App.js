import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Team from './pages/team/Team';
import Node from './pages/team/Node';
import Profile from './pages/profile/Profile';
import Tpassword from './pages/profile/Tpassword';
import Email from './pages/profile/Email';
import SelectNetwork from './pages/Withdraw/SelectNetwork';
import WithdrawReq from './pages/Withdraw/WithdrawReq';
import Wallet from './pages/invest/Wallet';
import RechargeFunds from './pages/invest/RechargeFunds';
import Transferfund from './pages/invest/Transferfund';
import PublicRoute from './components/PublicRoute'; 
// import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/home/dashboard';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import NodeDetails from './pages/home/NodeDetails';
import ForgotPassword from "./pages/auth/ForgotPassword"; // Import Forgot Password Page
import ResetPassword from "./pages/auth/ResetPassword"; // Import Forgot Password Page



function Layout({ children }) {
    const location = useLocation();
    const hideLayout = location.pathname === "/login" || location.pathname === "/register"|| location.pathname === "/forgot-password";

    return (
        <div id="__next">
            <div className="Toastify"></div>
            <div className="w-full h-screen flex justify-center">
                <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
                    {!hideLayout && <Sidebar />}
                    <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                        {!hideLayout && <Header />}
                        <Routes>
                            
                        <Route path="/" element={<Navigate to="/login" />} />
                            <Route path="/Dashboard" element={<PublicRoute><Dashboard /></PublicRoute>} />
                            <Route path="/nodedetails" element={<PublicRoute><NodeDetails /></PublicRoute>} />
                            <Route path="/Team" element={<PublicRoute><Team /></PublicRoute>} />
                            <Route path="/Node" element={<PublicRoute><Node /></PublicRoute>} />
                            <Route path="/Wallet" element={<PublicRoute><Wallet /></PublicRoute>} />
                            <Route path="/Profile" element={<PublicRoute><Profile /></PublicRoute>} />
                            <Route path="/Tpassword" element={<PublicRoute><Tpassword /></PublicRoute>} />
                            <Route path="/Email" element={<PublicRoute><Email /></PublicRoute>} />
                            <Route path="/RechargeFunds" element={<PublicRoute><RechargeFunds/></PublicRoute>} />
                            <Route path="/SelectNetwork" element={<PublicRoute><SelectNetwork/></PublicRoute>} />
                            <Route path="/WithdrawReq" element={<PublicRoute><WithdrawReq/></PublicRoute>} />
                            <Route path="/Transferfund" element={<PublicRoute><Transferfund/></PublicRoute>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/forgot-password" element={<ForgotPassword />} />
                            <Route path="/reset-password/:token" element={<ResetPassword />} />

                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;
