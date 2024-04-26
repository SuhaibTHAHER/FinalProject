import { jwtDecode } from "jwt-decode";
import { createContext , useEffect, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({children})=>{
    
    const [userName, setUserName] = useState('');
    const getUserData = ()=>{
        const token = localStorage.getItem('token');
        if(token){
            const decoded = jwtDecode(token);
           setUserName(decoded.userName);
           console.log(decoded)
        }
    }

    useEffect(()=>{
        getUserData()
    })
 
    return <UserContext.Provider value={{userName,setUserName,getUserData}}>{children}</UserContext.Provider>

}

export default UserContextProvider;