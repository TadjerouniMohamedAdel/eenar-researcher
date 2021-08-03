import Head from 'next/head'
import { MyHeadProps } from '../../utils/types/types';


/**
    Component that contains all the page's meta tag 
**/
const MyHead: React.FC<MyHeadProps> = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}

export default MyHead