import { FC, useEffect } from 'react';
import {
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Container,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { NavLink, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/entities/hooks';
import { notifications } from '@mantine/notifications';
import { logOut, setError, setSuccess } from '@/entities/user/userSlice';

export const Layout: FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const { success, isLoading, error, isAuth } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      notifications.clean();
      notifications.show({
        title: `Error ${error.status}`,
        message: error.messageError as string,
        color: 'red',
      });
      dispatch(setError(null));
    }
    if (success?.success) {
      notifications.clean();
      notifications.show({
        title: 'Success',
        message: success.message,
        color: 'green',
      });
      dispatch(setSuccess(null));
    }
    if (isLoading) {
      notifications.show({
        title: 'Loading',
        loading: true,
        message: 'Please wait...',
        color: 'blue',
      });
    }
  }, [error, success, isLoading]);

  return (
    <>
      <Box px={30} pt={30} pb={70}>
        <header>
          <Group justify="space-between" h="100%">
            <h2>Auth App</h2>
            {isAuth ? (
              <Group visibleFrom="sm">
                <Button
                  onClick={() => dispatch(logOut())}
                  variant="default"
                  component={NavLink}
                  to={'/login'}>
                  Log out
                </Button>
              </Group>
            ) : (
              <Group visibleFrom="sm">
                <Button variant="default" component={NavLink} to={'/login'}>
                  Log in
                </Button>
                <Button component={NavLink} to={'/registration'}>
                  Sign up
                </Button>
              </Group>
            )}

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>

        <Drawer
          opened={drawerOpened}
          onClose={() => {
            closeDrawer();
            dispatch(logOut());
          }}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}>
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />

            {isAuth ? (
              <Group justify="center" grow pb="xl" px="md">
                <Button
                  onClick={() => {
                    closeDrawer();
                    dispatch(logOut());
                  }}
                  component={NavLink}
                  to={'/login'}
                  variant="default">
                  Log out
                </Button>
              </Group>
            ) : (
              <Group justify="center" grow pb="xl" px="md">
                <Button
                  onClick={closeDrawer}
                  component={NavLink}
                  to={'/login'}
                  variant="default">
                  Log in
                </Button>
                <Button onClick={closeDrawer} component={NavLink} to={'/registration'}>
                  Sign up
                </Button>
              </Group>
            )}
          </ScrollArea>
        </Drawer>
      </Box>
      <Container size={420} my={20}>
        <Outlet />
      </Container>
    </>
  );
};
