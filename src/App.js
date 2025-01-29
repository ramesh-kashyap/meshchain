import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import PublicRoute from './components/PublicRoute'; // ✅ Import PublicRoute
import ProtectedRoute from './components/ProtectedRoute';


import Dashboard from './pages/home/dashboard';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />


                <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

            </Routes>
        </Router>
    );
}

export default App;
