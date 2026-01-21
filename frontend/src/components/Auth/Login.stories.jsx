import Login from "./Login";
import { BrowserRouter } from "react-router-dom";
import { userEvent, within} from '@storybook/test';
import { Context } from "../../authContext";
import '../../App.css';

export default {
    title: 'Pages/Login',
    component: Login,

    decorators: [
        (Story) => (
            <BrowserRouter>
            <Context.Provider value={{isAuthorized: false, setIsAuthorized: () => {}}}>
                <Story />
            </Context.Provider>
            </BrowserRouter>
        )
    ]
}

// Story 1: Empty State
export const Default = {
    args: {
        forceLoading: false,
    }
};

// Story 2: Mobile Viewport
export const MobileView = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile1', 
        },
    },
};

// Story 3: Play function Employer Flow
export const EmployerFlow = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const roleSelect = await canvas.findByRole('combobox');
        await userEvent.selectOptions(roleSelect, 'Employer');

        const emailInput = await canvas.findByPlaceholderText('Enter your email');
        await userEvent.type(emailInput, 'hr@tech-corp.com', { delay: 50 });

        const passwordInput = await canvas.findByPlaceholderText('Enter your Password');
        await userEvent.type(passwordInput, 'hiring123', { delay: 50 });
        
        const loginBtn = await canvas.findByRole('button', {name: /login/i });
        loginBtn.focus();
    }
};

// Story 4: Play function Job Seeker Flow
export const FilledFormSimulation = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const roleSelect = canvas.getByRole('combobox');
        await userEvent.selectOptions(roleSelect, 'Job Seeker');

        const emailInput = canvas.getByPlaceholderText('Enter your email');
        await userEvent.type(emailInput, 'demo@example.com', { delay: 100});

        const passwordInput = canvas.getByPlaceholderText('Enter your Password');
        await userEvent.type(passwordInput, 'supersecret123', {delay: 100});

        const loginBtn = canvas.getByRole('button', {name: /login/i });
        loginBtn.focus();
    }
}

