import PropTypes from 'prop-types'
import { React } from 'react'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}

export default MyApp
