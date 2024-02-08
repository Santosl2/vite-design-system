import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { BadgeTypes } from "./Badge.types";

const meta = {
  title: "DesignSystem/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["info", "success", "warning", "danger"] as BadgeTypes[],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Info: Story = {
  args: {
    variant: "info",
    children: "Badge",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Badge",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Badge",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Badge",
  },
};
