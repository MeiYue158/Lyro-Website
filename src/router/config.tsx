import { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import DemoPage from '../pages/demo/page';
import ContactPage from '../pages/contact/page';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/demo',
    element: <DemoPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
];

export default routes;