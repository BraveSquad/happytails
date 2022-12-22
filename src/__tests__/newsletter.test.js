import { render, screen } from '@testing-library/react';
import Newsletter from '../components/newsletter/newsletterForm';
// import 'jest-dom/extend-expect';
import '@testing-library/jest-dom/extend-expect';

describe('<Newsletter />', () => {
    it('renders login component', () => {
        render(<Newsletter />);
        const formElement = screen.getByTestId('form');
        expect(formElement).toBeDefined();
    });
});