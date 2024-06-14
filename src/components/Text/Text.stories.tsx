import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    bold: { control: 'boolean' },
    underline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
    disabledBgColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args}>Sample Text</Text>;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  bold: false,
  underline: false,
  disabled: false,
  visible: true,
  disabledBgColor: 'lightgrey',
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'medium',
  bold: false,
  underline: false,
  disabled: true,
  visible: true,
  disabledBgColor: 'lightgrey',
};
