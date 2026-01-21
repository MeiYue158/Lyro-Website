import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import HomePage from '../pages/home/page';
import DemoPage from '../pages/demo/page';
import ContactPage from '../pages/contact/page';
import PrivacyPage from '../pages/privacy/page';
import TermsPage from '../pages/terms/page';
import SmsConsentPage from '../pages/sms-consent/page';
import Header from '../components/feature/Header';

function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'demo',
        element: <DemoPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
      {
        path: 'sms-consent',
        element: <SmsConsentPage />,
      },
      {
        path: '*',
        element: <HomePage />,
      },
    ],
  },
];

export default routes;