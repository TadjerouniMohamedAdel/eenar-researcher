import React, { createContext,useReducer,useState, useEffect } from 'react'
import { userReducer } from '../reducers/userReducer'



export const UserContext = createContext()
export default function UserContextProvider(props) {
    const [ user, setUser ] = useState({});

    
    const storeUser = user => {
        setUser({
            ...user
        })
    }


    
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(user))
    },[user])

    return (
        <UserContext.Provider value={{user,dispatch:storeUser}}>
            {props.children}
        </UserContext.Provider>
    )
}