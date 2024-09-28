import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "../src/assets/tailwind.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export default preview;
