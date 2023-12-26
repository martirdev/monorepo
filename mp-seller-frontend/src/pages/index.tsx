import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ClientRoot from "./client-root/ClientRoot";
import ProductCardTable from "./product-card-table/ProductCardTable";
import Settings from "./settings/Settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ClientRoot />,
        children: [
            {
                index: true,
                element: <ProductCardTable />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
        ],
    },
]);

export const Routing = () => {
    return <RouterProvider router={router} />;
};
