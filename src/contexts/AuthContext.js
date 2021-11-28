import React, { useEffect } from "react";

import { api } from '../services/api';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    
    async function signIn({
        username,
        password
    }) {
        try {
            setIsLoading(true);

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

            if(user.user_type === 'admin'){
                localStorage.setItem('@attackz:token', auth.access_token);

                setUser({ id: user.id, user_name: user.user_name });

                toast.success(`Welcome ${user.user_name}`)
            } else {
                toast.error('This user does not have permission to access the panel');
                setIsLoading(false);
            };
        } catch(err) {
            toast.error(String(err.response.data.en));
            setIsLoading(false);
        };
    }

    function signOut(){
        localStorage.removeItem('@attackz:token');

        setUser(null);

        toast.success('Goodbye');
    }

    useEffect(() => {
        const token = localStorage.getItem('@attackz:token');

        api.defaults.headers.common.authorization = `Bearer ${token}`;

        if(token){
            const validateToken = async () => await api.get('/users');
            
            validateToken()
                .then(response => {
                    const { id, user_name } = response.data;

                    setUser({ id, user_name });
                })
                .catch(() => {
                    setUser(null);
                    
                    localStorage.removeItem('@attackz:token');

                    toast.error('You need authenticate');
                });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, user, signOut, isLoading }}>
            { children }
        </AuthContext.Provider>
    )
}