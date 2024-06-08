import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import ClientRoot from './client-root';
import Login from './login';
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
    },
    {
        path: '/auth',
        element: <Login />
    }
]);

export const Routing = () => {
    return <RouterProvider router={router} />;
};
