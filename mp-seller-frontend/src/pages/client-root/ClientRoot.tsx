import {Outlet, ScrollRestoration} from 'react-router-dom';

import {Header} from '_widgets/header';

const ClientRoot = function ClientRoot() {
    return (
        <>
            <div className="h-full overflow-hidden">
                <Header />
                <div className="container mx-auto my-16">
                    <Outlet />
                </div>
            </div>
            <ScrollRestoration />
        </>
    );
};

export default ClientRoot;
