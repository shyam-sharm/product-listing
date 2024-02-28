import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default MainPage;
