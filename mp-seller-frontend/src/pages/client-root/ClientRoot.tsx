import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header } from "../../widgets/header";
const ClientRoot = function ClientRoot() {
    return (
        <>
            <div className="min-h-screen">
                <Header />
                <Outlet />
            </div>
            <ScrollRestoration />
        </>
    );
};

export default ClientRoot;
