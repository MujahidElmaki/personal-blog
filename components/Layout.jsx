import React from 'react';
import { Header } from './';
import { Footer } from './';
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
