import React from 'react'
// import { Footer } from 'Components'
import { Global } from './styles'

export const Layout = ({ children }) => (
  <>
    <Global />
    {children}

    {/* <Footer /> */}
  </>
)
