import Head from 'next/head'
import { MyHeadProps } from '../../utils/types/types';

const MyHead:React.FC<MyHeadProps>=({title})=> {
    return (
       <Head>
           <title>{title}</title>
       </Head>
    )
}

export default MyHead