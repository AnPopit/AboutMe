import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageTwo } from './pages/Me.jsx';
import { PageOne } from './pages/Kontur.jsx';
import { PageMain } from './pages/MainPage.jsx';
import  React from 'react';

const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageMain />} />
                <Route path="/one" element={<PageOne />} />
                <Route path="/two" element={<PageTwo />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main;