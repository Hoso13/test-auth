import { useAppSelector } from '@/entities/hooks';

import { Text } from '@mantine/core';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserPage: FC = () => {
  const user = useAppSelector((state) => state.user);

  const navigate = useNavigate();

  if (!user.isAuth) {
    navigate('/login');
  }

  return (
    <>
      <div>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed"></Text>
        You are logged in as
        <Text fz="lg" fw={500}>
          {user.email}
        </Text>
      </div>
    </>
  );
};
