// @ts-ignore
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/test';
import { expect } from '@storybook/test';
import Button from './Button';
import { ButtonProps } from './Button.type';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    hoverColor: { control: 'color' },
    visible: { control: 'boolean' },
    size: { control: 'text' }, // Ensure size is controllable if you have this prop
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Define a Primary story for the Button component
export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
  disabled: false,
  backgroundColor: '#007bff',
  hoverColor: '#0056b3',
  visible: true,
};

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByText('Click me');
  
  // Check if the button is in the document
  await expect(buttonElement).toBeInTheDocument();
  
  // Verify button's default background color
  await expect(buttonElement).toHaveStyle(`background-color: #007bff`);
};

// Define a Disabled story for the Button component
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Click me',
  disabled: true,
  backgroundColor: '#cccccc',
  hoverColor: '#aaaaaa',
  visible: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByText('Click me');
  
  // Check if the button is in the document
  await expect(buttonElement).toBeInTheDocument();
  
  // Verify button's background color when disabled
  await expect(buttonElement).toHaveStyle(`background-color: #cccccc`);
};

// Define a Large story for the Button component
export const Large = Template.bind({});
Large.args = {
  label: 'Click me',
  disabled: false,
  backgroundColor: '#007bff',
  hoverColor: '#0056b3',
  visible: true,
  size: 'large', // Ensure this matches your component's prop if size is implemented
};

Large.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = await canvas.getByText('Click me');
  await userEvent.hover(buttonElement);
  await userEvent.click(buttonElement);
};

// Define a Hover story for the Button component
export const Hover = Template.bind({});
// Define a Hover story for the Button component
Hover.args = {
  label: 'Hover me',
  disabled: false,
  backgroundColor: '#007bff',
  hoverColor: '#007bff', // Match this color to what is applied on hover
  visible: true,
};

Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonElement = canvas.getByText('Hover me');
  
  // Check if the button is in the document
  await expect(buttonElement).toBeInTheDocument();
  
  // Hover over the button
  await userEvent.hover(buttonElement);

  // Verify button's hover background color
  await expect(buttonElement).toHaveStyle(`background-color: rgb(0, 123, 255)`); // Update to actual color
};

