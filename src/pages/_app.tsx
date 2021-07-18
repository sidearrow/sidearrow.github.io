import React from 'react';
import { AppProps } from 'next/app';

import '../styles/index.css';
import '../styles/markdown.scss';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
