import { style } from "@vanilla-extract/css";
import { rem } from "@mantine/core";
import { vars } from "@/theme";

export const card = style({
  position: "relative",
  backgroundColor: "var(--mantine-color-body)",
});

export const rating = style({
  position: "absolute",
  top: "var(--mantine-spacing-xs)",
  right: "rem(12px)",
  pointerEvents: "none",
});

export const title = style({
  display: "block",
  marginTop: "var(--mantine-spacing-md)",
  marginBottom: "rem(5px)",
});
export const action = style({
  backgroundColor:
    "light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-5))",
  ":hover": {
    backgroundColor:
      "light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-6))",
  },
});
export const footer = style({
  marginTop: "var(--mantine-spacing-md)",
});
