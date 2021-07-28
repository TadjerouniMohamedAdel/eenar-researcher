import React from 'react'
import axios from 'axios'
import { useMutation,useQueryClient } from 'react-query'


export default function useDeleteElement<T>(key:string,route:string|null,limit:number=10,offset:number=0,search:string|null="",researcherId:string|null="") {
    const queryClient = useQueryClient()

    return useMutation(
            (values:T)=>axios({
                method:"delete",
                url:`/api${route}`,
                data:values,
                withCredentials:true,

            }).then((res)=>res.data),
            {
                onSuccess:()=>{
                    queryClient.invalidateQueries([key,limit,offset,search])
                    queryClient.invalidateQueries(`${key}_infinite`)
                }
            }
            
        )
}
