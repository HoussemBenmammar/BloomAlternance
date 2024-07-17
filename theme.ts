"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    // Define your custom colors
    green: [
      "#E3F9F4", // Lightest green
      "#BBEFE7",
      "#90E6DB",
      "#61CBB6",
      "#2EC1AC",
      "#2EC1AC", // Primary green light
      "#1EADA2",
      "#159E8C",
      "#0C8876",
      "#12564B", // Primary green dark
    ],

    dark: [
      "rgba(0, 0, 0, 1)", // Full black
      "rgba(20, 20, 20, 1)", // Very dark grey
      "rgba(22, 33, 31, 1)", // Dark greenish grey
      "rgba(92, 96, 119, 1)", // Dark grey with a hint of blue
      "rgba(101, 111, 132, 1)", // Grey with a hint of blue
      "rgba(159, 164, 188, 1)", // Light grey with a hint of blue
      "rgba(0, 0, 0, 0.7)", // 70% black
      "rgba(20, 20, 20, 0.7)", // 70% very dark grey
      "rgba(0, 0, 0, 0.5)", // 50% black
      "rgba(20, 20, 20, 0.5)", // 50% very dark grey
    ],
  },
});
