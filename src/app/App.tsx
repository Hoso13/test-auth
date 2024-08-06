import { FC } from 'react';
import { Providers } from './providers';
import { AppRouter } from './routes';

export const App: FC = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
