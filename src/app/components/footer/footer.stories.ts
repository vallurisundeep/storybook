import type { Meta, StoryObj } from '@storybook/angular';
import { Footer } from './footer';

const meta: Meta<Footer> = {
    title: 'Components/Footer',
    component: Footer,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['default', 'compact', 'horizontal'],
            control: { type: 'select' },
        },
        theme: {
            options: ['light', 'dark', 'brand'],
            control: { type: 'select' },
        },
    },
};

export default meta;
type Story = StoryObj<Footer>;

export const Default: Story = {
    args: {
        theme: 'light',
        variant: 'default',
    },
};

export const Compact: Story = {
    args: {
        theme: 'light',
        variant: 'compact',
    },
};

export const Horizontal: Story = {
    args: {
        theme: 'light',
        variant: 'horizontal',
    },
};

export const Dark: Story = {
    args: {
        theme: 'dark',
        variant: 'default',
    },
};

export const Brand: Story = {
    args: {
        theme: 'brand',
        variant: 'default',
    },
};