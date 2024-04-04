import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
export const useLogout = () =>{
    const navigate = useNavigate()
const {dispatch} = useAuthContext()
    const logout =()=>{
        navigate('/login')
        localStorage.removeItem("user");
        localStorage.removeItem("account");
        dispatch({type:"LOGOUT"})

    }

    return{logout}
}

