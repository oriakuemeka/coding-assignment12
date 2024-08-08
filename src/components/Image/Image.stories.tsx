import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/test';
import { Img } from './Image';
import { ImgProps } from './Image.type'; // Adjust the import path as needed

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean' },
  },
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  disabled: false,
  visible: true,
  backgroundColor: 'transparent',
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.getByAltText('Placeholder Image');
  await userEvent.hover(imgElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  disabled: true,
  visible: true,
  backgroundColor: 'transparent',
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.getByAltText('Placeholder Image');
  await userEvent.hover(imgElement);
};

export const Hidden = Template.bind({});
Hidden.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  disabled: false,
  visible: false,
  backgroundColor: 'transparent',
};
Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.queryByAltText('Placeholder Image');
  if (imgElement) {
    await userEvent.hover(imgElement);
  }
};

export const CustomBackground = Template.bind({});
CustomBackground.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  disabled: false,
  visible: true,
  backgroundColor: 'blue',
};
CustomBackground.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.getByAltText('Placeholder Image');
  await userEvent.hover(imgElement);
};

export const DisabledWithCustomBackground = Template.bind({});
DisabledWithCustomBackground.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
  disabled: true,
  visible: true,
  backgroundColor: 'blue',
};
DisabledWithCustomBackground.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = await canvas.getByAltText('Placeholder Image');
  await userEvent.hover(imgElement);
};
