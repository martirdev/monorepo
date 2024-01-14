import {Outlet, ScrollRestoration} from 'react-router-dom';

import {Footer} from '_widgets/footer';
import {Header} from '_widgets/header';

const ClientRoot = function ClientRoot() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default ClientRoot;
