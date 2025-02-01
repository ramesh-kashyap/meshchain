
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Nodepower from './pages/team/Nodepower';
import Nodepowerdata from './pages/team/Nodepowerdata';
import Team from './pages/team/Team';
import Wallet from './pages/invest/Wallet';
import RechargeFunds from './pages/invest/RechargeFunds';
import NetworkSelect from './pages/Withdraw/NetworkSelect';
import Withdraw from './pages/Withdraw/Withdraw';
import Transfer from './pages/Withdraw/Transfer';
import Profile from './pages/profile/Profile';
import Changepass from './pages/profile/Changepass';
import Email from './pages/profile/Email';
import Tpassword from './pages/profile/Tpassword';
import PublicRoute from './components/PublicRoute'; 
// import ProtectedRoute from './components/ProtectedRoute';

import Dashboard from './pages/home/dashboard';
// import Profile from './pages/home/profile';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Header from './components/Header';
import NodeDetails from './pages/home/NodeDetails';

function App() {
    return (
        <Router>
            <div id="__next">
                <div className="Toastify"></div>
                <div className="w-full h-screen flex justify-center">
                    <div className="w-full max-w-[1920px] flex bg-white shadow-lg">
                        <Sidebar />
                        <div className="flex-1 flex flex-col text-black bg-[#F1F1F1] h-screen">
                            <Header />
                            {/* Main content should be routed here */}
                            <Routes>
                                {/* Default route for Dashboard */}
                                <Route path="/" element={<PublicRoute><Dashboard /></PublicRoute>} />
                                
                                {/* Other routes */}
                                <Route path="/nodedetails" element={<PublicRoute><NodeDetails /></PublicRoute>} />
                                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

                            </Routes>
                        </div>
                    </div>
                </div>

            </div>
        </Router>
    );
}

export default App;
