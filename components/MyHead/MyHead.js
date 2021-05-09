import Head from 'next/head'
import PropTypes from 'prop-types';

export default function MyHead({title}) {
    return (
       <Head>
           <title>{title}</title>
       </Head>
    )
}

MyHead.propTypes = {
    title:PropTypes.string.isRequired
}