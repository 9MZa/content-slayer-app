import { style } from "@vanilla-extract/css";
import { rem } from "@mantine/core";
import { vars } from "@/theme";

export const Wrapper = style({
  borderBottom: "1px solid",
  // borderColor:
  //   vars.colorScheme === "light"
  //     ? theme.colors.gray[2]
  //     : theme.colors.gray[9],
});

export const Logo = style({
//   fontSize: theme.fontSizes.xl,
  fontWeight: 600,
//   color:
//     theme.colorScheme === "light" ? theme.colors.gray[8] : theme.colors.gray[5],
});
