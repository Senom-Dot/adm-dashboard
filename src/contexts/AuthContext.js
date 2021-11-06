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
        try {
            const response = await api.post('/auth', {
                username,
                password
            });
            
            const auth = response.data;

            api.defaults.headers.common.authorization = `Bearer ${auth.access_token}`;

            const userData = await api.get('/users', {
                authorization: `Bearer ${auth.access_token}`
            });
            
            const user = userData.data;

            if(user.user_type === 'common'){
                localStorage.setItem('@attackz:token', auth.access_token);

                setUser({ id: user.id, user_name: user.user_name });
            } else {
                toast.error('This user does not have permission to access the panel');
            };
        } catch(err) {
            toast.error(err.response.data.en);
        };
    }

    useEffect(() => {
        const token = localStorage.getItem('@attackz:token');

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        if(token){
            const validateToken = async () => await api.get('/users');
            
            validateToken()
                .then(response => {
                    const user = response.data;

                    setUser({ id: user.id, user_name: user.user_name });
                })
                .catch(() => {
                    toast.error('You need authenticate');
                });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, user }}>
            { children }
        </AuthContext.Provider>
    )
}