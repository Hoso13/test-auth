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
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { FC } from 'react';
import { ILoginValues } from '../types';
import { login } from '@/entities/user/userAuthActions';
import { useAppDispatch, useAppSelector } from '@/entities/hooks';

export const LoginPage: FC = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (user.isAuth) {
    navigate('/user');
  }

  const handleSubmit = async (values: ILoginValues) => {
    const result = await dispatch(login(values));
    form.reset();
    if (login.fulfilled.match(result)) {
      navigate('/user');
    }
    if (login.rejected.match(result) && result.payload?.status === 403) {
      navigate('/confirmation');
    }
  };

  const form = useForm<ILoginValues>({
    mode: 'uncontrolled',
    initialValues: { email: '', password: '' },
    validate: {
      email: isEmail('Invalid email (e.g. example@example.com)'),
      password: isNotEmpty('Password is required'),
    },
    validateInputOnBlur: true,
  });
  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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

          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </form>
    </>
  );
};
