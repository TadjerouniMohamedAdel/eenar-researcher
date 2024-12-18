import { useEffect,useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import { UseUserProps } from '../types/types'
export const useUser=({ redirectTo, redirectIfFound }:UseUserProps) =>{
    const [isLoading,setIsLoading] = useState(true)
    const [user,setUser] = useState(null)
    const [error,setError] = useState(null)
  
    const finished = !isLoading
    const hasUser = Boolean(user)

    
    
    useEffect(() => {
        axios.get(`/api/user/user`,{withCredentials:true}).then(res =>
            setUser(res.data)
          ).catch(err=>{
              setError(err)
          })
          .finally(()=>{
              setIsLoading(false)
          })
    }, [])

  useEffect(() => {
      console.log(redirectTo, redirectIfFound, finished, hasUser)
    if (!finished) return
    if (!hasUser && redirectTo){
        console.log("redirectTo")
        Router.push(redirectTo)
    }
        // If redirectIfFound is also set, redirect if the user was found
    if(redirectIfFound && hasUser){
        console.log("found redirect")
        Router.push(redirectIfFound)
    } 
     
  }, [redirectTo, redirectIfFound, finished, hasUser])

  return error ? null : user
}