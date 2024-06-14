// Image.stories.tsx
import { Meta, StoryFn } from '@storybook/react';
import Image, { ImageProps } from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    backgroundColor: { control: 'color' },
    isVisible: { control: 'boolean' },
    isPrimary: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  isVisible: true,
  backgroundColor: 'transparent',
  isPrimary: true,
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  isVisible: true,
  backgroundColor: 'transparent',
  isPrimary: false,
  isDisabled: true,
};
