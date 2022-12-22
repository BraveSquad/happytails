import React from 'react';
import { toHaveTextContent } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Banner from '../components/banner/banner';

describe('<Banner />', () => {
    it('should render the banner component', () => {
        render(<Banner />);
        const headerElement = screen.getByTestId('banner');
        expect(headerElement).toBeDefined();
    });
    it('should detect the text in the banner component', () => {
        render(<Banner />);
        const bannerElement = screen.getByTestId('banner');
        expect(bannerElement).toHaveTextContent('Best Friends Animal Society');
        expect(bannerElement).toHaveTextContent('Friends of Animals');
        expect(bannerElement).toHaveTextContent('Animal Welfare Institute');
    });
});