import type { Preview } from "@storybook/react";

import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "../src/assets/tailwind.css";

const preview: Preview = {
  decorators: [
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
  },
};

export default preview;
