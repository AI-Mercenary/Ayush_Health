import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import MidHeader from './MidHeader';
import Navmenu from './Navmenu';

const Layout = ({child}) => {
  const location = useLocation(); 

  const isSchemePage = location.pathname.startsWith('/scheme');
  const isUserInterfacePage = location.pathname.startsWith('/userinterface');
  return (
    <React.Fragment>
      {/* Render Header and MidHeader only if not on Scheme pages */}
      {!isSchemePage &&  !isUserInterfacePage && (
        <>
          <Header />
          <MidHeader />
          <Navmenu />  
        </>
      )}

      {/* Conditionally render the navbar */}
      {/* {isSchemePage ? <SchemeNavbar /> : } */}
    </React.Fragment>
  );
};

export default Layout
