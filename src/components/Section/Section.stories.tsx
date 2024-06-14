import { Meta, StoryFn } from '@storybook/react';
import Section from './Section';
import { SectionProps } from './Section.types';

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    disabled: { control: 'boolean' },
    visible: { control: 'boolean' },
    disabledBgColor: { control: 'color' },
  },
} as Meta;

const Template: StoryFn<SectionProps> = (args) => <Section {...args}>Primary Section</Section>;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  visible: true,
  disabledBgColor: 'lightgrey',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  visible: true,
  disabledBgColor: 'lightgrey',
};
