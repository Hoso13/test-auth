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
import { hasLength, isEmail, isNotEmpty, matchesField, useForm } from '@mantine/form';
import { FC } from 'react';

export const RegistrationPage: FC = () => {
  const form = useForm({
    mode: 'controlled',
    initialValues: { email: '', password: '', confirmPassword: '' },
    validate: {
      email: isEmail('Invalid email (e.g. example@example.com)'),
      password:
        isNotEmpty('Password is required') && hasLength({ min: 6 }, 'Min length is 6'),
      confirmPassword: matchesField('password', 'Passwords do not match'),
    },
    validateInputOnBlur: true,
  });
  return (
    <>
      <Container size={420} my={40}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Title ta="center">Welcome!</Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Already have an account?{' '}
            <Anchor size="sm" component={NavLink} to={'/login'}>
              Login
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
            <PasswordInput
              label="Confirm password"
              placeholder="Confirm password"
              required
              mt="md"
              key={form.key('confirmPassword')}
              {...form.getInputProps('confirmPassword')}
            />

            <Button type="submit" fullWidth mt="xl">
              Sign up
            </Button>
          </Paper>
        </form>
      </Container>
    </>
  );
};
