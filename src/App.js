import Admin from './Admin/Admin';
import './App.css';
import LoginRegister from './Components/LoginRegister/loginRegister';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function PageContent() {
    const location = useLocation();

    const getPageClass = () => {
        if (location.pathname === '/login') return 'login-register';
        if (location.pathname === '/admin') return 'admin-page';
        return '';
    };

    return (
        <div className={`App ${getPageClass()}`}>
            <Routes>
                <Route path="/login" element={<LoginRegister />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </div>
    );
}

function App() {
    return (
        <Router>
            <PageContent />
        </Router>
    );
}

export default App;
