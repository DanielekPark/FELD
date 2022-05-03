import React, { FC } from "react";
import Nav from './Nav'
import Footer from './footer'

interface Props {
  children: any
}

export const Layout: FC<Props> = ({ children}) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
