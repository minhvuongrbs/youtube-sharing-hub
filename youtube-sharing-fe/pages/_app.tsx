import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { AppProps } from 'next/app';
import Head from 'next/head';
import createEmotionCache from '../src/createEmotionCache';
import theme from '../src/theme';
import { isBrowser } from '../utils/isBrowser';
import { setAuthToken } from '../utils/setAuthToken';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
axios.defaults.baseURL = 'https://vincentyoutube.azurewebsites.net/';

//check jwt token
if (isBrowser()) {
  const token = JSON.parse(localStorage.getItem('user') || '{}')?.access_token;
  if (token) {
    setAuthToken(token);
  }
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
