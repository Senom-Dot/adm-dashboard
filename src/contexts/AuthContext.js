import React, { useEffect } from "react";

import { api } from '../services/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null);

    async function signIn({
        username,
        password
    }) {
        await api.post('/auth', {
            username,
            password
        })

        .then(response => {
            const data = response.data

            localStorage.setItem('@attackz:token', data.access_token);

            api.defaults.headers.common.authorization = `Bearer ${data.token}`
            
            setUser({ token: data.token });
        }).catch((err) => {
            toast.error(err.response.data.en);
        });
    }

    function signOut(){
        localStorage.removeItem('@attackz:token');

        setUser(null);

        toast.success('Goodbye');
    }

    useEffect(() => {
        const token = localStorage.getItem('@attackz:token');

        if(token){
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            
            setUser(token)
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, user, signOut }}>
            { children }
        </AuthContext.Provider>
    )
}