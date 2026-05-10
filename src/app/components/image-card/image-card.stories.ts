import type { Meta, StoryObj } from '@storybook/angular';
import { ImageCard } from './image-card';

const meta: Meta<ImageCard> = {
  title: 'Components/ImageCard',
  component: ImageCard,
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
type Story = StoryObj<ImageCard>;

export const Default: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Nature landscape',
    title: 'Explore the Outdoors',
    description: 'Discover beautiful landscapes and connect with nature on your next adventure.',
    badgeText: 'Featured',
    variant: 'default',
    theme: 'light',
  },
};

export const CompactDark: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Tech setup',
    title: 'Tech Review',
    description: 'The latest gadgets and software reviewed.',
    badgeText: 'New',
    variant: 'compact',
    theme: 'dark',
  },
};

export const HorizontalBrand: Story = {
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
    imageAlt: 'Students',
    title: 'Join our Community',
    description: 'Connect with thousands of like-minded individuals and grow together.',
    variant: 'horizontal',
    theme: 'brand',
  },
};
