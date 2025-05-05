import { useState } from "react";
import toast from 'react-hot-toast';
import { loginRequest } from "../../services/api.js";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);

        const user = {
            userlogin: email,  // ¡Aquí va el cambio clave!
            password
        };

        const response = await loginRequest(user);
        setIsLoading(false);

        if (response.error) {
            return toast.error(
                response?.err?.response?.data?.message || 
                'Error general al intentar logearse. Intenta de nuevo.'
            );
        }

        const { token } = response.data;
        localStorage.setItem('token', token);
        navigate('/channels');
    };

    return {
        login,
        isLoading
    };
};
