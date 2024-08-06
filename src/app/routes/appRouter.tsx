import { FC } from 'react';
import { LoginPage } from '@/pages/login/index.tsx';
import { RegistrationPage } from '@/pages/registration/index.tsx';
import { UserPage } from '@/pages/user/index.tsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Layout } from '@/app/layout';

export const AppRouter: FC = () => {
  const routers = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<></>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/user" element={<UserPage />} />
    </Route>,
  );

  const router = createBrowserRouter(routers, {});
  return <RouterProvider router={router} />;
};
