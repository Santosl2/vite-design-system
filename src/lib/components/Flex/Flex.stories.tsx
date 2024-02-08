import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "./Flex";

const meta = {
  title: "DesignSystem/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alignItems: {
      description: "Alinhamento dos itens",
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
      control: {
        type: "radio",
      },
    },
    flexDirection: {
      description: "Direção dos itens",
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: {
        type: "radio",
      },
    },
    justifyContent: {
      description: "Alinhamento do conteúdo",
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      control: {
        type: "radio",
      },
    },
    flexWrap: {
      description: "Quebra de linha",
      options: ["nowrap", "wrap", "wrap-reverse"],
      control: {
        type: "radio",
      },
    },
    gap: {
      description: "Espaçamento entre os itens (será convertido em rem)",
      control: { type: "number" },
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    gap: 4,
    children: (
      <>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </>
    ),
  },
};

export const Row: Story = {
  args: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    gap: 4,
    children: (
      <>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    gap: 4,
    children: (
      <>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </>
    ),
  },
};

export const Wrap: Story = {
  args: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 4,
    children: (
      <>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </>
    ),
  },
};
