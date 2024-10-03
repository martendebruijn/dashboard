import type { Meta, StoryObj } from "@storybook/react";

import { Dashboard } from "@/pages/dashboard/Dashboard";

const meta: Meta<typeof Dashboard> = {
  component: Dashboard,
};

export default meta;
type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {
  args: {},
};
