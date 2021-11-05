import React from 'react';
import { AuthProvider } from './contexts/AuthContext';

import { ToastContainer } from "react-toastify";

import { GlobalStyle } from './styles/GlobalStyle';
import { Routes } from './routes';

export default function App() {
    return (
        <AuthProvider>
            <GlobalStyle/>
            
            <ToastContainer style={{ padding: '1rem' }}/>

            <Routes/>
        </AuthProvider>
    )
}