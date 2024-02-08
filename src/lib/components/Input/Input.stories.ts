import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "DesignSystem/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      description: "Nome do input",
      control: { type: "text" },
    },
    label: {
      description: "Texto do label",
      control: { type: "text" },
    },
    background: {
      description: "Cor de fundo",
      options: ["primary"],
      control: {
        type: "radio",
      },
    },
    isRequired: {
      description: "Campo obrigatório",
      control: { type: "boolean" },
    },
    isFilled: {
      description: "Campo preenchido",
      control: { type: "boolean" },
    },
    hasError: {
      description: "Campo com erro",
      control: { type: "boolean" },
    },
    helpText: {
      description: "Texto de ajuda",
      control: { type: "text" },
    },
    startIcon: {
      description: "Ícone do início",
      control: { type: "text" },
    },
    isPassword: {
      description: "Campo de senha",
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "input",
  },
};
