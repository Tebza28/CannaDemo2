import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AgeGate from './components/AgeGate';

function App() {
    return (
        <Router basename="/CannaDemo2">
            <ScrollToTop />
            <AgeGate>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </AgeGate>
        </Router>
    );
}

export default App;
