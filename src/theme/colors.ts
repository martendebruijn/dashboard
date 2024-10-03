import type { Shades } from "./types";

const primary: Record<Shades, string> = {
  "50": "#f0f0ff",
  "100": "#e5e4ff",
  "200": "#cecdff",
  "300": "#aca6ff",
  "400": "#8373ff",
  "500": "#5c3bff",
  "600": "#4914ff",
  "700": "#3700ff",
  "800": "#2f01d6",
  "900": "#2803af",
  "950": "#140077",
  DEFAULT: "#4914ff",
};

const secondary: Record<Shades, string> = {
  50: "#e0f7fa",
  100: "#b2ebf2",
  200: "#80deea",
  300: "#4dd0e1",
  400: "#26c6da",
  500: "#00bcd4",
  600: "#00acc1",
  700: "#0097a7",
  800: "#00838f",
  900: "#006064",
  950: "#00363a",
  DEFAULT: "#00bcd4",
};

const success: Record<Shades, string> = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  950: "#003300",
  DEFAULT: "#4caf50",
};

const destructive: Record<Shades, string> = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  950: "#7f0000",
  DEFAULT: "#f44336",
};

const info: Record<Shades, string> = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  950: "#002f6c",
  DEFAULT: "#03a9f4",
};

const warning: Record<Shades, string> = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  950: "#b91400",
  DEFAULT: "#ff9800",
};

export const colorsWithShades = {
  primary,
  secondary,
  success,
  destructive,
  info,
  warning,
};

export const namedColors = {
  white: "#fff",
  black: "#000",
  current: "currentColor",
  transparent: "transparent",
  "dark-slate": "#020617",
};

export const colors = {
  ...colorsWithShades,
  ...namedColors,
};
