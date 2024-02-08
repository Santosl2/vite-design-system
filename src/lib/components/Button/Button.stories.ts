import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "DesignSystem/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "link", "outlined", "soft", "plain", "classic"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Button",
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
    children: "Button",
  },
};

export const Plain: Story = {
  args: {
    variant: "plain",
    children: "Button",
  },
};

export const Classic: Story = {
  args: {
    variant: "classic",
    children: "Button",
  },
};
