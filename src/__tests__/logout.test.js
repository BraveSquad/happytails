import { render, screen } from '@testing-library/react';
import Logout from '../components/logout/logout';

describe('<Logout />', () => {
    it('renders logout component', () => {
        render(<Logout />);
        const logoutElement = screen.getByTestId('logout');
        expect(logoutElement).toBeDefined();
    });
});