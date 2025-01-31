import './App.css';
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
import ProtectedRoute from './components/ProtectedRoute';


import Dashboard from './pages/home/dashboard';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                <Route path="/Dashboard" element={<PublicRoute><Dashboard /></PublicRoute>} />
                <Route path="/Nodepower" element={<PublicRoute><Nodepower /></PublicRoute>} />
                <Route path="/Nodepowerdata" element={<PublicRoute><Nodepowerdata /></PublicRoute>} />
                <Route path="/Team" element={<PublicRoute><Team /></PublicRoute>} />
                <Route path="/Wallet" element={<PublicRoute><Wallet/></PublicRoute>} />
                <Route path="/RechargeFunds" element={<PublicRoute><RechargeFunds/></PublicRoute>} />
                <Route path="/NetworkSelect" element={<PublicRoute><NetworkSelect/></PublicRoute>} />
                <Route path="/Withdraw" element={<PublicRoute><Withdraw/></PublicRoute>} />
                <Route path="/Transfer" element={<PublicRoute><Transfer/></PublicRoute>} />
                <Route path="/Profile" element={<PublicRoute><Profile/></PublicRoute>} />
                <Route path="/Changepass" element={<PublicRoute><Changepass/></PublicRoute>} />
                <Route path="/Email" element={<PublicRoute><Email/></PublicRoute>} />
                <Route path="/Tpassword" element={<PublicRoute><Tpassword/></PublicRoute>} />















                {/* <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}

            </Routes>
        </Router>
    );
}

export default App;
