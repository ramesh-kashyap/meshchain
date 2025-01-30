import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import PublicRoute from './components/PublicRoute'; 
import ProtectedRoute from './components/ProtectedRoute';


import Dashboard from './pages/home/dashboard';
import Profile from './pages/home/profile';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                <Route path="/Dashboard" element={<PublicRoute><Dashboard /></PublicRoute>} />
                <Route path="/Profile" element={<PublicRoute><Profile /></PublicRoute>} />



                {/* <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}

            </Routes>
        </Router>
    );
}

export default App;
