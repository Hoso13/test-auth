import { useAppSelector } from '@/entities/hooks';
import { Title, Button } from '@mantine/core';

import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  return isAuth ? (
    <>
      <Title>You are logged in</Title>
      <Button variant="outline" to={'/user'} component={NavLink}>
        Account
      </Button>
    </>
  ) : (
    <>
      <Title>You are not logged in</Title>
      <Button variant="outline" to={'/login'} component={NavLink}>
        Login
      </Button>
    </>
  );
};
