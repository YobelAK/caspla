import { createTheme, MantineColorsTuple } from '@mantine/core';

// Define the primary color palette based on #284361
const primaryColor: MantineColorsTuple = [
  '#f0f4f8',
  '#d9e2ec',
  '#bcccdc',
  '#9fb3c8',
  '#829ab1',
  '#658299',
  '#4a6741',
  '#284361', // Main color
  '#1e3149',
  '#152030'
];

export const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary: primaryColor,
  },
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  headings: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
      },
    },
    Card: {
      defaultProps: {
        radius: 'md',
        shadow: 'sm',
      },
    },
    Input: {
      defaultProps: {
        radius: 'md',
      },
    },
    Select: {
      defaultProps: {
        radius: 'md',
      },
    },
  },
});