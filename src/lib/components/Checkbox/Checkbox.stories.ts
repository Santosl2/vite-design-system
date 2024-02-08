import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "DesignSystem/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "Nome do checkbox",
      control: { type: "text" },
    },
    label: {
      description: "Texto do checkbox",
      control: { type: "text" },
    },
    size: {
      description: "Tamanho do checkbox",
      defaultValue: "md",
      options: ["sm", "md", "lg"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    name: "small",
    label: "Small",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    name: "checkbox",
    label: "Checkbox",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    name: "large",
    label: "Large",
    size: "lg",
  },
};
