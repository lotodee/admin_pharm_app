import { Children, createContext ,useReducer ,useEffect } from "react";

export const AuthContext = createContext()

export const authReducer = (state ,action) =>{
    switch(action.type){
        case 'LOGIN':
            return{
                user:action.payload
            }
        case 'LOGOUT':
            return{
                user:null
            }
         case 'GETACCOUNT':
            return{
                account :action.payload
            } 
        default:
            return state
        }
    }

 export const accountReducer  = (accState ,action) =>{
    switch(action.type){
        case 'GETACCOUNT':
            return{
                account :action.payload
            } 
        default:
            return accState
        }
    }
 


export const AuthContextProvider = ({children})=>{

    const [state ,dispatch]= useReducer(authReducer ,{
        user:null,
        
    })


    
    const [accState ,accDispatch]= useReducer(accountReducer ,{
        account:null,
        
    })

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        const signed = JSON.parse(localStorage.getItem('signed'))
        if(user){
            dispatch({type:'LOGIN' , payload:user})
  
        }
        if(signed){
            dispatch({type:'LOGIN' , payload:signed})
  
        }
    },[])
    console.log("AuthContext State " , state)
    console.log("AuthContext State " , accState)
    return(
        <AuthContext.Provider value={{ ...state, dispatch , ...accState,accDispatch }}>
            {children}
        </AuthContext.Provider>
    )
}