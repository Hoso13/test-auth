import { FC } from 'react';
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { NavLink, Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <Box px={30} pt={30} pb={70}>
        <header>
          <Group justify="space-between" h="100%">
            <h2>Auth App</h2>
            <Group visibleFrom="sm">
              <Button variant="default" component={NavLink} to={'/login'}>
                Log in
              </Button>
              <Button component={NavLink} to={'/registration'}>
                Sign up
              </Button>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}>
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>

      <Outlet />
    </>
  );
};
