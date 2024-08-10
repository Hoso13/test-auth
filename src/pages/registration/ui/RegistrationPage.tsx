import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Button,
} from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';
import { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { FC, useEffect } from 'react';

import { IRegistrationValues } from '../types';
import { useAppDispatch, useAppSelector } from '@/entities/hooks';
import { registration } from '@/entities/user/userAuthActions';

export const RegistrationPage: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/user');
    }
  }, [isAuth]);

  const handleSubmit = async (values: IRegistrationValues) => {
    const result = await dispatch(registration(values));
    form.reset();
    if (registration.fulfilled.match(result)) {
      navigate('/confirmation');
    }
  };

  const form = useForm<IRegistrationValues>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      email: isEmail('Invalid email (e.g. example@example.com)'),
      password:
        isNotEmpty('Password is required') && hasLength({ min: 6 }, 'Min length is 6'),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
    validateInputOnBlur: true,
  });
  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
    </>
  );
};
