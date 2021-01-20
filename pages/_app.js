import '../styles/globals.css'
import { createMuiTheme, StylesProvider, ThemeProvider,jssPreset, CssBaseline } from '@material-ui/core';
import rtl from 'jss-rtl';
import { create } from 'jss';
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

    const theme = createMuiTheme({
        direction: 'rtl',
      });
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
    </StylesProvider>
  )
}
 
export default MyApp
