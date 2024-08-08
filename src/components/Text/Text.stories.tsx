import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { within } from '@storybook/test';
import { expect } from '@storybook/test';
import Text from './Text';
import { TextProps } from './Text.type';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    bold: { control: 'boolean' },
    italic: { control: 'boolean' },
    visible: { control: 'boolean' },
    disabled: { control: 'boolean' },
    small: { control: 'boolean' },
    medium: { control: 'boolean' },
    large: { control: 'boolean' },
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Hello, world!',
  color: 'black',
  bold: false,
  italic: false,
  visible: true,
  disabled: false,
  medium: true,
  backgroundColor: 'transparent',
  small: false,
  large: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Hello, world!',
  color: 'black',
  bold: false,
  italic: false,
  visible: true,
  disabled: true,
  medium: true,
  backgroundColor: 'lightgray',
  large: false,
  small: false,
};

export const Small = Template.bind({});
Small.args = {
  content: 'Hello, world!',
  color: 'black',
  bold: false,
  italic: false,
  visible: true,
  disabled: false,
  small: true,
  backgroundColor: 'lightgray',
  large: false,
  medium: false,
};

export const Large = Template.bind({});
Large.args = {
  content: 'Hello, world!',
  color: 'black',
  bold: false,
  italic: false,
  visible: true,
  disabled: false,
  large: true,
  small: false,
  medium: false,
  backgroundColor: 'lightgray',
};

// Play functions for interactive testing
Large.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Hello, world!');
  await expect(textElement).toBeInTheDocument();
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Hello, world!');
  await expect(textElement).toBeInTheDocument();
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Hello, world!');
  await expect(textElement).toBeInTheDocument();
};

Small.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByText('Hello, world!');
  await expect(textElement).toBeInTheDocument();
};
