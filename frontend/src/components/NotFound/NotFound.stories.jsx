import NotFound from "./NotFound";
import { BrowserRouter } from "react-router-dom";
import '../../App.css';

export default {
    title: 'Components/NotFound',
    component: NotFound,
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
            <Story />
            </BrowserRouter>
        )
    ]
}

// Story 1: Standard Desktop View
export const DesktopView = {}

// Story 2: Mobile View
export const MobileView = {
    parameters: {
        viewport: {
            defaultViewport: 'mobile1',
        },
    },
};

// Story 3: Tablet View
export const TabletView = {
    parameters: {
        viewport: {
            defaultViewport: 'tablet',
        },
    },
};

