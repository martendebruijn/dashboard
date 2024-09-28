import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "click me",
  },
};

export const Dark: Story = {
  args: {
    children: "click me",
  },
  parameters: {
    themes: {
      themeOverride: "dark",
    },
  },
};

export const Mobile: Story = {
  args: {
    children: "click me",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
