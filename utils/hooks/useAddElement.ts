import React from 'react'
import axios from 'axios'
import { useMutation,useQueryClient } from 'react-query'


export default function useAddElement<T>(key:string,route:string|null,limit=10,offset=0,search="",researcherId="") {
    const queryClient = useQueryClient()

    return useMutation(
            (values:T)=>axios.post(`/api${route}`,values,{withCredentials:true}).then((res)=>res.data),
            {
                onSuccess:()=>{
                    queryClient.invalidateQueries([key,limit,offset,search])
                    queryClient.invalidateQueries(`${key}_infinite`)
                }
            }
            
        )
}