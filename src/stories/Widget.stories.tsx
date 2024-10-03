import type { Meta, StoryObj } from "@storybook/react";

import { Widget } from "@components/Widget";

const meta: Meta<typeof Widget> = {
  title: "Components/Widget",
  component: Widget,
};

export default meta;
type Story = StoryObj<typeof Widget>;

export const Default: Story = {
  args: {
    children: "",
  },
};
