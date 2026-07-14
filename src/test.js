import type { Meta, StoryObj } from "@storybook/angular";

import { AdsInput } from "./input";

const meta: Meta<AdsInput> = {
  title: "Components/Forms/Input",
  component: AdsInput,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "search", "email", "password", "number", "tel"],
      description: "Native input type",
    },
    disabled: { control: "boolean" },
    invalid: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<AdsInput>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Name",
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: "Search",
  },
};

export const Invalid: Story = {
  args: {
    label: "SAP ID",
    placeholder: "SAP ID",
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "SAP ID",
    placeholder: "SAP ID",
    disabled: true,
  },
};
