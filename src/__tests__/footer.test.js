import { toHaveTextContent } from '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../components/footer/footer';
// import 'jest-dom/extend-expect';
import '@testing-library/jest-dom/extend-expect';

describe('<Footer />', () => {
    it('renders foot component', () => {
        render(<Footer />);
        const footerElement = screen.getByTestId('footer');
        expect(footerElement).toBeDefined();
    });
    it('should detect the text in the footer component', () => {
        render(<Footer />);
        const footerElement = screen.getByTestId('footer');
        expect(footerElement).toHaveTextContent('HappyTails 2022');
    });
});