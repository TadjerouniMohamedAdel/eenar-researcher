import React from 'react'
import axios from 'axios'
import { useMutation,useQueryClient } from 'react-query'


export default function useAddElement(key,route,limit=10,offset=0,search="",researcherId="") {
    const queryClient = useQueryClient()

    return useMutation(
            (values)=>axios.post(`${process.env.NEXT_PUBLIC_API_URL}${route}`,values).then((res)=>res.data),
            {
                onSuccess:()=>{
                    queryClient.invalidateQueries([key,limit,offset,search])
                }
            }
            
        )
}