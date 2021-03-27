import React from 'react';
import Header from '../components/Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header title="Proyect-Ar" />  
      {children}
    <Footer />
  </>
);

export default Layout;