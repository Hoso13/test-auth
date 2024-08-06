import { MantineProvider } from '@mantine/core';

import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <MantineProvider>
      <Outlet />
    </MantineProvider>
  );
};
