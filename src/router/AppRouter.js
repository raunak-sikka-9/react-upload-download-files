import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../components/App';
import Header from '../components/Header';
import FilesList from '../components/FilesList';


const AppRouter = () => (
    <Router>

        <div className="container">
            <Header />
            <div className="main-content">
                <Routes>
                    <Route element={<App />} path="/" exact />
                    <Route element={<FilesList />} path="/list" exact />
                </Routes>
            </div>
        </div>

    </Router>
);

export default AppRouter;