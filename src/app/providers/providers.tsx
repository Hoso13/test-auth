import { MantineProvider } from '@mantine/core';
import { FC } from 'react';

interface IProviders {
  children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};
