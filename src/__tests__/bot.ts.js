import { render, screen, fireEvent } from '@testing-library/react';
import Messenger from '../components/bot/bot';

describe('<Messenger />', () => {
    it('renders messenger component', () => {
        render(<Messenger />);
        const bot = screen.getByTestId('messenger');
        expect(bot).toBeDefined();
    });
});