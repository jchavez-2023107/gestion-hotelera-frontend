import { useState } from 'react';
import { registerRequest } from '../../services/api';
import toast from 'react-hot-toast';

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const register = async (email, username, password) => {
        setIsLoading(true);

        const user = {
            name: "Sebastian",
            surname: "Istacuy",
            email,
            username,
            password,
            phone: "+502 36692558", // opcional
            role: "CLIENT" // puedes omitir si es el valor por defecto
        };

        const response = await registerRequest(user);
        setIsLoading(false);

        if (response.error) {
            setError(true);
            if (response?.err?.response?.data?.errors) {
                const arrayErrors = response?.err?.response?.data?.errors;
                for (const error of arrayErrors) {
                    return toast.error(error.msg);
                }
            }
            return toast.error(
                response?.err?.response?.data?.message ||
                response?.err?.data?.msg ||
                'Error general al intentar registrar el usuario.'
            );
        }

        setError(false);
        return toast.success('Usuario registrado correctamente 🎉');
    };

    return {
        register,
        isLoading,
        error,
        setError
    };
};
