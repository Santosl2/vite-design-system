import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";
import { fonts } from "../../theme/fonts";
const meta = {
  title: "DesignSystem/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Conteúdo do texto",
      control: { type: "text" },
    },
    size: {
      description: "Tamanho do texto",
      defaultValue: "md",
      options: Object.entries(fonts["size"]).map(([key]) => key),
      control: {
        type: "radio",
      },
    },
    fontWeight: {
      description: "Peso da fonte",
      defaultValue: "normal",
      options: ["normal", "bold"],
      control: {
        type: "radio",
      },
    },
    fontFamily: {
      description: "Família da fonte",
      defaultValue: "text",
      options: ["text", "title"],
      control: {
        type: "radio",
      },
    },
    hasEllipsis: {
      description: "Adiciona reticências ao texto",
      control: { type: "boolean" },
    },
    color: {
      description: "Cor do texto",
      control: { type: "color" },
    },
    display: {
      description: "Tipo de display",
      defaultValue: "flex",
      options: ["flex", "block"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text",
    as: "p",
  },
};
