import { render, screen } from '@testing-library/react';
import Login from '../components/login/login';

describe('<Login />', () => {
    it('renders login component', () => {
        render(<Login />);
        const loginElement = screen.getByTestId('login');
        expect(loginElement).toBeDefined();
    });
});