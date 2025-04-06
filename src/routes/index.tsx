import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CashRegisterPage from '../pages/CashRegisterPage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CashRegisterPage />} />
                <Route path="/cash-register" element={<CashRegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes