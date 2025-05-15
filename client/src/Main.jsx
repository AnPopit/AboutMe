import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TwoPage } from './pages/TwoPage.jsx';
import { OnePage } from './pages/OnePage.jsx';
import { KonturUIDemoPage } from './pages/ThreePage.jsx';
import { MainPage } from './pages/MainPage.jsx';
import  React from 'react';

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/one" element={<OnePage />} />
                <Route path="/two" element={<TwoPage />} />
                <Route path="/three" element={<KonturUIDemoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main;