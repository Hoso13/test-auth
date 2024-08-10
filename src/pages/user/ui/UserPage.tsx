import { useAppSelector } from '@/entities/hooks';

import { Text } from '@mantine/core';
import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserPage: FC = () => {
  const { email, isAuth } = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth]);

  return (
    <>
      <div>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed"></Text>
        You are logged in as
        <Text fz="lg" fw={500}>
          {email}
        </Text>
      </div>
    </>
  );
};
