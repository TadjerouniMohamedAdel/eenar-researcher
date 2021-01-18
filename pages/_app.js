import '../styles/globals.css'
import { createMuiTheme, StylesProvider, ThemeProvider,jssPreset } from '@material-ui/core';
import rtl from 'jss-rtl';
import { create } from 'jss';
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

    const theme = createMuiTheme({
        direction: 'rtl',
      });
      useEffect(() => {
        document.body.dir="rtl"
       
      },[])
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <Component {...pageProps} />
      </StylesProvider>
    </ThemeProvider>
  )
}
 
export default MyApp
