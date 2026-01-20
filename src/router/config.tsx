import type { RouteObject } from 'react-router-dom';
import HomePage from '../pages/home/page';
import DemoPage from '../pages/demo/page';
import ContactPage from '../pages/contact/page';
import PrivacyPage from '../pages/privacy/page';
import TermsPage from '../pages/terms/page';
import SmsConsentPage from '../pages/sms-consent/page';

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
    path: '/privacy',
    element: <PrivacyPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: '/sms-consent',
    element: <SmsConsentPage />,
  },
  {
    path: '*',
    element: <HomePage />,
  },
];

export default routes;