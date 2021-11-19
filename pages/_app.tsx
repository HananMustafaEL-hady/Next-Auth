import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import React, { Fragment } from 'react'
import Navbar from '../components/navbar'
function MyApp({ Component, pageProps }: AppProps) {
  return <Provider>
    <Navbar />
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
