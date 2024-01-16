import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import ClientRoot from './client-root';
import Places from './places';
import ProductCardTable from './product-card-table';

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientRoot />,
        children: [
            {
                index: true,
                element: <ProductCardTable />
            },
            {
                path: 'places',
                element: <Places />
            }
        ]
    }
]);

export const Routing = () => {
    return <RouterProvider router={router} />;
};
