import React from 'react';

// Custom components
import StickyBar from '../../components/StickyBar';
import Header from '../../components/Header';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <StickyBar />
      <Header />
      {children}
    </>
  );
};

export default Layout;
