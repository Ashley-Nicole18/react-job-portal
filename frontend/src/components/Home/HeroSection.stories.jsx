import HeroSection from './HeroSection';
import { FaRocket, FaGlobeAmericas, FaLaptopCode, FaHandshake, FaUserTie, FaUsers } from "react-icons/fa";

import '../../App.css'; 

export default {
  title: 'Components/HeroSection',
  component: HeroSection,
};

//Story 1: Default view
export const Default = {
  args: {} 
};

// Story 2: Minimal Data Test
export const MinimalData = {
  args: {
    headingPart1: "Join the Future",
    headingPart2: "Build the Web",
    description: "We are a fast-growing team building the next unicorn. Join us early and make an impact.",
    details: [
        { id: 1, title: "5", subTitle: "Open Roles", icon: <FaLaptopCode /> },
        { id: 2, title: "Remote", subTitle: "Work Culture", icon: <FaGlobeAmericas /> },
        { id: 3, title: "12", subTitle: "Team Members", icon: <FaUserTie /> },
        { id: 4, title: "Series A", subTitle: "Funded", icon: <FaRocket /> },
    ]
  },
};

// Story 3: Heavy Data Test
export const StressTest = {
  args: {
    headingPart1: "Connecting the World",
    headingPart2: "One Career at a Time",
    description: "With offices in 13 countries, we are one of the largest employment network existing. Your next opportunity is waiting.",
    details: [
        { id: 1, title: "50,000,000+", subTitle: "Active Positions", icon: <FaGlobeAmericas /> },
        { id: 2, title: "Fortune 500", subTitle: "Partners", icon: <FaHandshake /> },
        { id: 3, title: "1 Billion", subTitle: "Daily Users", icon: <FaUsers /> },
        { id: 4, title: "Top 1%", subTitle: "Verified", icon: <FaUserTie /> },
    ]
  },
};

// Story 4: Empty State
export const EmptyState = {
  args: {
    headingPart1: "",
    headingPart2: "",
    description: "",
    details: []
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