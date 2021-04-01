import '../styles/globals.css'
import { createMuiTheme, StylesProvider, ThemeProvider, jssPreset, CssBaseline } from '@material-ui/core';
import rtl from 'jss-rtl';
import { create } from 'jss';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from '../redux/store'
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { appWithTranslation } from 'next-i18next'
import Laoding from '../components/Loading/Laoding';
import { AnimatePresence } from 'framer-motion';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate } from 'react-query/hydration'
import { useRef } from 'react'



//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());







function MyApp({ Component, pageProps, router }) {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const store = useStore(pageProps.initialReduxState)
  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })
  const theme = createMuiTheme({
    direction: router.locale === 'ar' ? 'rtl' : 'ltr',
  });
  const queryClientRef = useRef()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }


  return (
    <Provider store={store}>
      <PersistGate loading={<Laoding />} persistor={persistor}>
        <StylesProvider jss={jss}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AnimatePresence exitBeforeEnter>
              <QueryClientProvider  client={queryClientRef.current}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} key={router.route} />
              </Hydrate>
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </AnimatePresence>
          </ThemeProvider>
        </StylesProvider>
      </PersistGate>
    </Provider>
  )
}
export default appWithTranslation(MyApp)
