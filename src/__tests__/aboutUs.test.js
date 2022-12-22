import React from 'react';
import { toHaveTextContent } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from '../components/aboutUs/aboutUs';

describe('<About />', () => {
    it('should render the about component', () => {
        render(<About />);
        const loadingElement = screen.getByTestId('about');
        expect(loadingElement).toBeDefined();
    });
    it('should detect the text in the about component', () => {
        render(<About />);
        const loadingElement = screen.getByTestId('about');
        expect(loadingElement).toHaveTextContent('About Us');
        expect(loadingElement).toHaveTextContent('Tony');
        expect(loadingElement).toHaveTextContent('Sarah');
        expect(loadingElement).toHaveTextContent('Danny');
        expect(loadingElement).toHaveTextContent('Von');
        expect(loadingElement).toHaveTextContent('Martha');
    });
});