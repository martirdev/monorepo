import {lazy} from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    async lazy() {
      const ClientRoot = lazy(() => import('./client-root'));
      return {Component: ClientRoot};
    },
    children: [
      {
        index: true,
        async lazy() {
          const Home = lazy(() => import('./home'));
          return {Component: Home};
        }
      },
      {
        path: 'about',
        async lazy() {
          const About = lazy(() => import('./about'));
          return {Component: About};
        }
      },
      {
        path: 'policy-information',
        async lazy() {
          const PolicyInformation = lazy(() => import('./policy-information'));
          return {Component: PolicyInformation};
        }
      },
      {
        path: 'legal-information',
        async lazy() {
          const LegalInformation = lazy(() => import('./legal-information'));
          return {Component: LegalInformation};
        }
      },
      {
        path: 'faq',
        async lazy() {
          const FAQ = lazy(() => import('./faq'));
          return {Component: FAQ};
        }
      },
      {
        path: 'contacts',
        async lazy() {
          const Contacts = lazy(() => import('./contacts'));
          return {Component: Contacts};
        }
      },
      {
        path: 'cart',
        async lazy() {
          const Cart = lazy(() => import('./cart'));
          return {Component: Cart};
        }
      },
      {
        path: 'product/:product_id',
        async lazy() {
          const Product = lazy(() => import('./product'));
          return {Component: Product};
        }
      },
      {
        path: '*',
        async lazy() {
          const NotFound = lazy(() => import('./not-found'));
          return {Component: NotFound};
        }
      }
    ]
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
