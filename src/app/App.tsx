import { FC } from 'react';
import { Providers } from './providers';
import { AppRouter } from './routes';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

export const App: FC = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
