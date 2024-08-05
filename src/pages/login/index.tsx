import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

export const LoginPage = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: { email: '', password: '' },
    validate: {
      email: isEmail('Invalid email (e.g. example@example.com)'),

      password: isNotEmpty('Password is required'),
    },
    validateInputOnBlur: true,
  });
  return (
    <>
      <Container size={420} my={40}>
        <form>
          <Title ta="center">Welcome!</Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Do not have an account yet?{' '}
            <Anchor size="sm" component={NavLink} to={'/registration'}>
              Create account
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="Email"
              placeholder="you@example.com"
              required
              key={form.key('email')}
              {...form.getInputProps('email')}
            />
            <PasswordInput
              label="Password"
              placeholder="Password"
              required
              mt="md"
              key={form.key('password')}
              {...form.getInputProps('password')}
            />

            <Button fullWidth mt="xl">
              Sign in
            </Button>
          </Paper>
        </form>
      </Container>
    </>
  );
};
