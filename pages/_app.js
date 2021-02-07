import '../styles/globals.css'
import { createMuiTheme, StylesProvider, ThemeProvider,jssPreset, CssBaseline } from '@material-ui/core';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from '../redux/store'

function MyApp({ Component, pageProps }) {
    const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    const store = useStore(pageProps.initialReduxState)
    const persistor = persistStore(store, {}, function () {
      persistor.persist()
    })
    const theme = createMuiTheme({
        direction: 'rtl',
      });
  return (
    <Provider store={store}>
      <PersistGate loading={<div>loading</div>} persistor={persistor}>
          <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                    <Component {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
      </PersistGate>
    </Provider>
  )
}
 
export default MyApp
