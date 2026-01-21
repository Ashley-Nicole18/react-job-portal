import AuthButton from './AuthButton';
import { userEvent, within } from '@storybook/test';
import '../../App.css'; 

export default {
  title: 'Components/AuthButton', 
  component: AuthButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    text: "Login",
    loading: false,
  }
};


export const Loading = {
  args: {
    text: "Login",
    loading: true,
  }
};


export const RegisterMode = {
  args: {
    text: "Register Now",
    loading: false,
  }
};


export const HoverEffect = {
  args: {
    text: "Hover Me",
    loading: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole('button');
    await userEvent.hover(btn);
  }
};