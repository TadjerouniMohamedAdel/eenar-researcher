import axios from 'axios'
import { useQuery } from 'react-query'
 
export default function useGetList<T>(key:string,route:string|null,limit:number=10,offset:number=0,search:string="",researcherId:string="") {
    return route ? useQuery<T,{response:{status:number}}>(
                    [key,limit,offset,search],
                    ()=>axios.get(`/api${route}?offset=${offset}&limit=${limit}&title=${search}&researcherId=${researcherId}`,{withCredentials:true})
                            .then((response)=>response.data)
                    ,
                )
                : {isLoading:null,data:null,error:null}
        
}
