import { LoginPage } from '@/pages/login/index.tsx';
import { RegistrationPage } from '@/pages/registration/index.tsx';
import { UserPage } from '@/pages/user/index.tsx';
import { App } from '@/app/App.tsx';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/registration',
        element: <RegistrationPage />,
      },
      {
        path: '/user',
        element: <UserPage />,
      },
    ],
  },
]);

export default router;
