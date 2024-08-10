import { Button, Text, TextInput, Title, Paper } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { FC, useEffect } from 'react';
import { IConfirmationValues } from '../../registration/types';
import { confirmation } from '@/entities/user/userAuthActions';
import { useAppDispatch, useAppSelector } from '@/entities/hooks';
import { useNavigate } from 'react-router-dom';

export const CodeConfirmPage: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/user');
    }
  }, [isAuth]);

  const handleCodeSubmit = async (values: IConfirmationValues) => {
    const result = await dispatch(confirmation(values));
    if (confirmation.fulfilled.match(result)) {
      navigate('/login');
    }
  };
  const form = useForm<IConfirmationValues>({
    mode: 'uncontrolled',
    initialValues: {
      confirmCode: '',
    },
    validate: {
      confirmCode: isNotEmpty('Code is required'),
    },
    validateInputOnBlur: true,
  });
  return (
    <form onSubmit={form.onSubmit((values) => handleCodeSubmit(values))}>
      <Title ta="center">Confirm your email</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        We sent you a code. Please enter it below.
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Confirmation Code"
          placeholder="Enter your code"
          required
          key={form.key('confirmCode')}
          {...form.getInputProps('confirmCode')}
        />

        <Button type="submit" fullWidth mt="xl">
          Confirm
        </Button>
      </Paper>
    </form>
  );
};
