import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ClientRoot from "./client-root/ClientRoot";
import ProductCardTable from "./product-card-table/ProductCardTable";
import Places from "./places/Places";

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
                path: "places",
                element: <Places />,
            },
        ],
    },
]);

export const Routing = () => {
    return <RouterProvider router={router} />;
};
