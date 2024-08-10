import { FC, useEffect } from 'react';

import { Layout } from '@/app/layout';
import { CodeConfirmPage } from '@/pages/confirmation';
import { LoginPage } from '@/pages/login';
import { RegistrationPage } from '@/pages/registration';
import { UserPage } from '@/pages/user';
import { HomePage } from '@/pages/home';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { setIsAuth, setUser } from '@/entities/user/userSlice';
import { useAppDispatch } from '@/entities/hooks';

export const AppRouter: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUser(localStorage.getItem('email')));
    dispatch(setIsAuth(localStorage.getItem('email') !== null));
  }, []);

  const routers = createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/confirmation" element={<CodeConfirmPage />} />
      <Route path="/user" element={<UserPage />} />
    </Route>,
  );

  const router = createBrowserRouter(routers, {});
  return <RouterProvider router={router} />;
};
