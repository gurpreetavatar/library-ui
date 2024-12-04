import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    appearance: 'primary',
    buttonContent: 'ddddd',
  },
};

export const Secondary: Story = {
  args: {
    appearance: 'outline',
    buttonContent: 'Outline',
  },
};
