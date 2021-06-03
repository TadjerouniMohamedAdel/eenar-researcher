import { useEffect,useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
export function useUser({ redirectTo, redirectIfFound } = {}) {
    const [isLoading,setIsLoading] = useState(true)
    const [user,setUser] = useState(null)
    const [error,setError] = useState(null)
  
    const finished = !isLoading
    const hasUser = Boolean(user)

    
    
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/user/user`,{withCredentials:true}).then(res =>
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