import PopularCompanies from './PopularCompanies';

export default {
  title: 'Home/PopularCompanies',
  component: PopularCompanies,
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {};
  
export const MobileView = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const TabletView = {
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};