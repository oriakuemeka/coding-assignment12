// src/components/Card/Card.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';  // Corrected casing
import { CardProps } from './Card.types';  // Corrected casing

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    isPrimary: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/300x200',
  name: 'Uche Nwokolo',
  email: 'uche.nwokolo@example.com',
  isPrimary: true,
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageUrl: 'https://via.placeholder.com/300x200',
  name: 'Chizarom Nwokolo',
  email: 'chizarom.nwokolo@example.com',
  isPrimary: false,
  isDisabled: true,
};
