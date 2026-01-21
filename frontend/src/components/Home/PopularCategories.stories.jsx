import PopularCategories from './PopularCategories';
import { FaCode, FaPaintBrush, FaChartLine } from "react-icons/fa";
import '../../App.css'; 

export default {
  title: 'Components/PopularCategories',
  component: PopularCategories,
};

// Story 1: Default State
export const Default = {
  args: {} 
};

// Story 2: Minimal Data Test
export const MinimalData = {
  args: {
    categories: [
      { id: 1, title: "IT Support", subTitle: "5 Jobs", icon: <FaCode /> },
      { id: 2, title: "HR", subTitle: "1 Job", icon: <FaChartLine /> },
      { id: 3, title: "Sales", subTitle: "10 Jobs", icon: <FaPaintBrush /> },
    ]
  },
};

// Story 3: Heavy Data Test
export const StressTest = {
  args: {
    categories: [
      { 
        id: 1, 
        title: "Senior Vice President of Global Engineering & Infrastructure", 
        subTitle: "1,000,000+ Open Positions Available Now", 
        icon: <FaCode /> 
      },
      { 
        id: 2, 
        title: "International Maritime Law & Logistics Coordination", 
        subTitle: "500 Positions", 
        icon: <FaChartLine /> 
      },
      { 
        id: 3, 
        title: "Full Stack MERN/MEAN/LAMP/Python/Go Developer", 
        subTitle: "Remote Only", 
        icon: <FaCode /> 
      },
      { 
        id: 4, 
        title: "AI & Machine Learning Data Scientist for Healthcare", 
        subTitle: "Urgent Hiring", 
        icon: <FaPaintBrush /> 
      },
    ]
  },
};

// Story 4: Empty State
export const EmptyState = {
  args: {
    categories: []
  },
};

// Story 5: Mobile View
export const MobileView = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// Story 6: Tablet View
export const TabletView = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};