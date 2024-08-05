import { Text, Group } from '@mantine/core';

export const UserPage = () => {
  return (
    <>
      <div>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          Software engineer
        </Text>

        <Text fz="lg" fw={500}>
          Robert Glassbreaker
        </Text>

        <Group wrap="nowrap" gap={10} mt={3}>
          <Text fz="xs" c="dimmed">
            robert@glassbreaker.io
          </Text>
        </Group>

        <Group wrap="nowrap" gap={10} mt={5}>
          <Text fz="xs" c="dimmed">
            +11 (876) 890 56 23
          </Text>
        </Group>
      </div>
    </>
  );
};
