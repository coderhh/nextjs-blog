import '../styles/global.css';
import { AppProps } from 'next/app';
import React from 'react';
/**
 *
 * @param {AppProps} param0
 * @return { JSX.Element}
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
