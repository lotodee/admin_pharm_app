import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const { dispatch } = useAuthContext();
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);
      
       
        try {
            const response = await fetch('https://staging.medfinder.com.ng/api/v1/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const json = await response.json();
            
            if (!response.ok) {
                setError(json);
                setIsLoading(false);
            } else {
                localStorage.setItem('user', JSON.stringify(json));
                dispatch({ type: 'LOGIN', payload: json });
                setIsLoading(false);
                setLoggedIn(true);
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error)
            setError(error.message);
            setIsLoading(false);
        }
    }

    return { login, isLoading, error, loggedIn };
}