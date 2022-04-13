import { CacheProvider } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import Image from 'next/image';
import PropTypes from 'prop-types';
import * as React from 'react';
import createEmotionCache from '../src/createEmotionCache';
import { darkTheme } from '../src/theme';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <div className="bgWrap">
                    <Image
                        alt="Mountains"
                        src="/mountains.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    ></Image>
                </div>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
