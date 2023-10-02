"use client"

import {
  ActionIcon,
  useMantineColorScheme,
  Title,
  Container,
  Text,
  Group,
  Box,
  Space,
  isLightColor,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

const Navbar = () => {
  // const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const dark = colorScheme === "dark";
  const color = useMantineColorScheme()

  return (
    <Box py={20}>
      <Container>
        <Group justify={`space-between`}>
          <Text>Content ⚡️ Slayer</Text>
          {/* <ActionIcon onClick={() => toggleColorScheme()}>
            {dark ? <IconMoon /> : <IconSun />}
          </ActionIcon> */}
          {/* {isLightColor ? <IconMoon /> : <IconSun />} */}
        </Group>
      </Container>
    </Box>
  );
};

export default Navbar;
