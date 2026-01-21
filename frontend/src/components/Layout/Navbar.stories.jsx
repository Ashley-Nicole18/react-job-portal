import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../../authContext';
import '../../App.css';

export default {
  title: 'Layout/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ minHeight: '100px' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export const JobSeekerView = {
  render: () => (
    <Context.Provider value={{ isAuthorized: true, user: { role: "Job Seeker" } }}>
      <Navbar />
    </Context.Provider>
  ),
};

export const EmployerView = {
  render: () => (
    <Context.Provider value={{ isAuthorized: true, user: { role: "Employer" } }}>
      <Navbar />
    </Context.Provider>
  ),
};

export const MobileView = {
  ...JobSeekerView,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const LoggedOut = {
  render: () => (
    <Context.Provider value={{ isAuthorized: false }}>
      <Navbar />
    </Context.Provider>
  ),
};