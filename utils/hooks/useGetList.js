import axios from 'axios'
import { useQuery } from 'react-query'
 
export default function useGetList(key,route,limit=10,offset=0,search="",researcherId="") {
    return route ? useQuery(
                    [key,limit,offset,search],
                    ()=>axios.get(`${process.env.NEXT_PUBLIC_API_URL}${route}?offset=${offset}&limit=${limit}&title=${search}&researcherId=${researcherId}`)
                            .then((response)=>response.data)
                    ,
                )
                : {isLoading:null,data:null,error:null}
        
}
