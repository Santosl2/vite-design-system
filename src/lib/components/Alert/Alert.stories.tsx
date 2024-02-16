import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { FaAddressCard } from "react-icons/fa";
import { Button } from "../Button";

const meta = {
  title: "DesignSystem/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      description: "Cor do alerta",
      options: ["primary", "danger", "success", "warning", "neutral"],
      control: {
        type: "select",
      },
    },
    variant: {
      description: "Estilo do alerta",
      options: ["solid", "outlined", "soft", "plain"],
      control: {
        type: "select",
      },
    },
    startDecorator: {
      description: "Ícone no início do alerta",
      control: {
        disable: true,
      },
    },
    endDecorator: {
      description: "Ícone no final do alerta",
      control: {
        disable: true,
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
      description: "Tamanho do alerta",
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithIcon: Story = {
  args: {
    variant: "soft",
    startDecorator: <FaAddressCard />,
    size: "md",
    children: (
      <>
        <Alert.Title>Esse é o título</Alert.Title>
        <Alert.Description>
          Essa é a descrição do Alert do Adiante
        </Alert.Description>
      </>
    ),
  },
};

export const WithIconAndAction: Story = {
  args: {
    variant: "soft",
    startDecorator: <FaAddressCard />,
    endDecorator: <Button variant="link">ACTION</Button>,
    size: "md",
    children: (
      <>
        <Alert.Title>Esse é o título</Alert.Title>
        <Alert.Description>
          Essa é a descrição do Alert do Adiante
        </Alert.Description>
      </>
    ),
  },
};

export const WithAction: Story = {
  args: {
    variant: "soft",
    endDecorator: <Button variant="link">ACTION</Button>,
    size: "md",
    children: (
      <>
        <Alert.Title>Esse é o título</Alert.Title>
        <Alert.Description>
          Essa é a descrição do Alert do Adiante
        </Alert.Description>
      </>
    ),
  },
};

export const Default: Story = {
  args: {
    variant: "soft",
    size: "md",
    children: (
      <>
        <Alert.Title>Esse é o título</Alert.Title>
        <Alert.Description>
          Essa é a descrição do Alert do Adiante
        </Alert.Description>
      </>
    ),
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
    size: "md",
    children: (
      <>
        <Alert.Title>Esse é o título</Alert.Title>
        <Alert.Description>
          Essa é a descrição do Alert do Adiante
        </Alert.Description>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    size: "md",
    children: (
      <>
        <Alert.Title>Esse é o título</Alert.Title>
        <Alert.Description>
          Essa é a descrição do Alert do Adiante
        </Alert.Description>
      </>
    ),
  },
};

export const Soft: Story = {
  args: {
    variant: "soft",
    size: "md",
    children: (
      <>
        <Alert.Title>Esse é o título</Alert.Title>
        <Alert.Description>
          Essa é a descrição do Alert do Adiante
        </Alert.Description>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    variant: "soft",
    size: "sm",
    children: (
      <>
        <Alert.Title>Esse é o título</Alert.Title>
        <Alert.Description>
          Essa é a descrição do Alert do Adiante
        </Alert.Description>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    variant: "soft",
    size: "lg",
    children: (
      <>
        <Alert.Title>Esse é o título</Alert.Title>
        <Alert.Description>
          Essa é a descrição do Alert do Adiante
        </Alert.Description>
      </>
    ),
  },
};
