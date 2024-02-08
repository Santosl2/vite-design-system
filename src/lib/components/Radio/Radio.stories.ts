import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta = {
  title: "DesignSystem/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      description: "Nome do radio",
      control: { type: "text" },
    },
    children: {
      description: "Texto do radio",
      control: { type: "text" },
    },
    size: {
      description: "Tamanho do radio",
      defaultValue: "md",
      options: ["sm", "md", "lg"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
    id: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    id: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    id: "large",
  },
};
