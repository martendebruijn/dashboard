import type { Meta, StoryObj } from "@storybook/react";

import { Clock } from "@components/Clock";

const meta: Meta<typeof Clock> = {
  title: "Widgets/Clock",
  component: Clock,
};

export default meta;
type Story = StoryObj<typeof Clock>;

export const Default: Story = {
  args: {},
};
