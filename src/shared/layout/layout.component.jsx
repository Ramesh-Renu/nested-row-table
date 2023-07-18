
import { Outlet } from 'react-router-dom';
import { Fragment, lazy, useEffect } from 'react';

// LAZY LOAD COMPONENT
const Header = lazy(() => import('./header/header.component'));
const Footer = lazy(() => import('./footer/footer.component'));
const SideMenu = lazy(() => import('./sidemenu/sidemenu.component'));

import Loader from '@shared/loader';

const Layout = ()=>{
  
  return (
    <Fragment>
      {/* <Loader /> */}
      <div className="flex-col-1">
        <Header />
        <SideMenu/> {/* SIDE MENU */}
      </div>
      <div className="flex-col-2">
        <Outlet />
      </div>
      <Footer />
        
    </Fragment>
  );
}

export default Layout;