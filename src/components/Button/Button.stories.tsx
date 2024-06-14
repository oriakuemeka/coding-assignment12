import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonPrimaryTest = Template.bind({});
ButtonPrimaryTest.args = {
    disabled: false,
    label: "Test",
    visible: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    label: "Test",
    visible: true,
    disabledBackgroundColor: "lightgray",
};
