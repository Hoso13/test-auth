import { store } from '@/entities/store';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { FC } from 'react';
import { Provider } from 'react-redux';

interface IProviders {
  children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <Provider store={store}>
      <MantineProvider>
        <Notifications autoClose={4000} />
        {children}
      </MantineProvider>
    </Provider>
  );
};
