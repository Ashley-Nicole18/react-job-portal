import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../../authContext';

export default {
  title: 'Layout/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
};

export const Authorized = {
  render: () => (
    <Context.Provider value={{ isAuthorized: true }}>
      <Footer />
    </Context.Provider>
  ),
};

export const Unauthorized = {
  render: () => (
    <Context.Provider value={{ isAuthorized: false }}>
      <Footer />
    </Context.Provider>
  ),
};

export const MobileView = {
  ...Authorized,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};