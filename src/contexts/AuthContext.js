import React, { useEffect } from "react";

import { api } from '../services/api';

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
            alert(err);
        });
    }

    useEffect(() => {
        const token = localStorage.getItem('@attackz:token');

        if(token){
            api.defaults.headers.common.authorization = `Bearer ${token}`;
            
            setUser(token)
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, user }}>
            { children }
        </AuthContext.Provider>
    )
}