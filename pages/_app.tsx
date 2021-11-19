import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { Fragment } from 'react'
import Navbar from '../components/navbar'
function MyApp({ Component, pageProps }: AppProps) {
  return <Fragment>
    <Navbar />
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp
